"use strict";

parserFactory.register("vozer.io", () => new VozerParser());

class VozerParser extends Parser {
    constructor() {
        super();
    }

    async getChapterUrls(dom) {
        const chapters = [];
        const addedUrls = new Set();
        let maxPage = 1;

        dom.querySelectorAll("a[href*='pagechap=']").forEach(a => {
            const match = a.getAttribute("href").match(/pagechap=(\d+)/);
            if (match) {
                const pageNum = parseInt(match[1], 10);
                if (pageNum > maxPage) {
                    maxPage = pageNum;
                }
            }
        });

        const extractChapters = (docDom) => {
            const list = [];
            const links = Array.from(docDom.querySelectorAll("table a[href*='/chuong-']"));

            links.forEach(link => {
                const href = link.getAttribute("href");
                if (href && !href.includes("#")) {
                    const fullUrl = new URL(href, docDom.baseURI).href;
                    const cleanUrl = fullUrl.split("?")[0];

                    if (!addedUrls.has(cleanUrl)) {
                        addedUrls.add(cleanUrl);
                        list.push({
                            title: link.textContent.trim().replace(/\s+/g, " "),
                            sourceUrl: fullUrl
                        });
                    }
                }
            });
            return list;
        };

        chapters.push(...extractChapters(dom));

        if (maxPage > 1) {
            const baseUrl = dom.baseURI.split("?")[0];
            const fetchPromises = [];

            for (let i = 2; i <= maxPage; i++) {
                const pageUrl = `${baseUrl}?pagechap=${i}`;
                const request = HttpClient.wrapFetch(pageUrl)
                    .then(res => extractChapters(res.responseXML))
                    .catch(() => []);
                fetchPromises.push(request);
            }

            const results = await Promise.all(fetchPromises);
            results.forEach(list => {
                if (list && list.length > 0) {
                    chapters.push(...list);
                }
            });
        }

        chapters.sort((a, b) => {
            const numA = parseInt(a.sourceUrl.match(/chuong-(\d+)/)?.[1] || 0, 10);
            const numB = parseInt(b.sourceUrl.match(/chuong-(\d+)/)?.[1] || 0, 10);
            return numA - numB;
        });

        return chapters;
    }

    extractTitleImpl(dom) {
        return dom.querySelector("h1.text-2xl.font-bold")?.textContent.trim();
    }

    extractAuthor(dom) {
        const pTags = Array.from(dom.querySelectorAll(".p-2.leading-7 p"));
        const authorP = pTags.find(p => p.textContent.includes("Tác giả:"));
        return authorP ? authorP.querySelector("strong")?.textContent.trim() : null;
    }

    extractSubject(dom) {
        const pTags = Array.from(dom.querySelectorAll(".p-2.leading-7 p"));
        const typeP = pTags.find(p => p.textContent.includes("Thể loại:"));
        return typeP ? typeP.querySelector("a")?.textContent.trim() : null;
    }

    findCoverImageUrl(dom) {
        return dom.querySelector("meta[property='og:image']")?.content || util.getFirstImgSrc(dom, "img.border-4");
    }

    findChapterTitle(dom) {
        return dom.querySelector("h1#chapter-title")?.textContent.trim();
    }

    findContent(dom) {
        return dom.querySelector("ol.chap");
    }
}