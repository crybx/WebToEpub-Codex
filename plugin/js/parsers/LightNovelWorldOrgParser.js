"use strict";

// Use one or more of these to specify when the parser is to be used

parserFactory.register("lightnovelworld.org", () => new LightNovelWorldOrgParser());

class LightNovelWorldOrgParser extends Parser {
    constructor() {
        super();
    }

    // eslint-disable-next-line no-unused-vars
    async getChapterUrls(dom, chapterUrlsUI) {
        return await this.getChapterUrlsFromApi();
    }

    async getChapterUrlsFromApi() {
        const baseUrl = "https://lightnovelworld.org/api/novel/shadow-slave/chapters/";
        const limit = 500; // max limit (more than 500 just defaults to 500)
        let offset = 0;
        let allChapters = [];
        let hasMore = true;

        while (hasMore) {
            const apiUrl = `${baseUrl}?offset=${offset}&limit=${limit}`;
            const response = await HttpClient.fetchJson(apiUrl);
            const data = response.json;

            if (data.chapters) {
                const chapters = data.chapters.map(chapter => ({
                    sourceUrl: `https://lightnovelworld.org/novel/shadow-slave/chapter/${chapter.number}/`,
                    title: chapter.title
                }));
                allChapters.push(...chapters);
            }

            hasMore = data.has_more;
            offset += limit;
        }

        return allChapters;
    }

    findContent(dom) {
        return dom.querySelector(".chapter-content");
    }

    extractTitleImpl(dom) {
        return dom.querySelector(".novel-title");
    }


    extractAuthor(dom) {
        let authorLabel = dom.querySelector(".novel-author");
        let authorText = authorLabel?.textContent?.trim() ?? super.extractAuthor(dom);
        // Remove "Author: " prefix if present
        return authorText.replace(/^Author:\s*/i, "");
    }

    extractLanguage(dom) {
        return dom.querySelector("html").getAttribute("lang");
    }

    extractSubject(dom) {
        let tags = [...dom.querySelectorAll(".genre-tags")];
        return tags.map(e => e.textContent.trim()).join(", ");
    }

    extractDescription(dom) {
        return dom.querySelector(".summary-content").textContent.trim();
    }

    findChapterTitle(dom) {
        return dom.querySelector(".chapter-title");
    }

    findCoverImageUrl(dom) {
        return util.getFirstImgSrc(dom, ".novel-cover-container");
    }
}
