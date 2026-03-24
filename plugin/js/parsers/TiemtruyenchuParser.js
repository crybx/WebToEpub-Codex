"use strict";

parserFactory.register("tiemtruyenchu.com", () => new TiemTruyenChuParser());

class TiemTruyenChuParser extends Parser {
    constructor() {
        super();
    }

    async getChapterUrls(dom) {
        let chapters = [];
        let addedUrls = new Set();
        let baseUrl = "https://tiemtruyenchu.com";
        
        let links = Array.from(dom.querySelectorAll("a.chapter-item-link"));
        
        links.forEach(link => {
            let href = link.getAttribute("href");
            if (href) {
                let fullUrl = new URL(href, baseUrl).href;
                if (!addedUrls.has(fullUrl)) {
                    let chapNum = parseInt(link.getAttribute("data-chap-num")) || 0;
                    
                    chapters.push({
                        title: link.textContent.trim(),
                        sourceUrl: fullUrl,
                        chapNum: chapNum 
                    });
                    addedUrls.add(fullUrl);
                }
            }
        });
        
        chapters.sort((a, b) => a.chapNum - b.chapNum);
        
        return chapters;
    }

    extractTitleImpl(dom) {
        return dom.querySelector("h1")?.textContent.trim() || super.extractTitleImpl(dom);
    }

    extractAuthor(dom) {
        let authorNode = dom.querySelector("a[href*='/tac-gia/']");
        return authorNode ? authorNode.textContent.trim() : super.extractAuthor(dom);
    }

    extractDescription(dom) {
        let descNode = dom.querySelector(".content-text");
        return descNode ? descNode.innerText.trim() : super.extractDescription(dom);
    }

    findCoverImageUrl(dom) {
        let img = dom.querySelector(".story-poster");
        if (img) {
            let src = img.getAttribute("src");
            if (src) {
                return new URL(src, "https://tiemtruyenchu.com").href;
            }
        }
        return super.findCoverImageUrl(dom);
    }

    findChapterTitle(dom) {
        let titleNode = dom.querySelector(".chapter-title") || dom.querySelector("h2");
        return titleNode ? titleNode.textContent.trim() : super.findChapterTitle(dom);
    }

    findContent(dom) {
        let content = dom.querySelector("#chapter-content") || dom.querySelector(".chapter-content") || dom.querySelector(".content-text");
        if (content) {
            content.querySelectorAll(".ads").forEach(e => e.remove());
            return content;
        }
        return super.findContent(dom);
    }
}