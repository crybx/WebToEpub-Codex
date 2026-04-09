"use strict";

parserFactory.register("uukanshu.cc", () => new UukanshuParser());

class UukanshuParser extends Parser {
    constructor() {
        super();
    }

    /**
     * @override
     * @param { Document } dom 
     */
    async getChapterUrls(dom) {
        /** @type { NodeListOf<HTMLAnchorElement> } */
        const anchors = dom.querySelectorAll("#list-chapterAll div a");

        return Array.from(anchors, anchor => util.hyperLinkToChapter(anchor));
    }

    /**
     * @override
     * @param { Document } dom 
     */
    findContent(dom) {
        return dom.querySelector("div.readcotent"); // [sic]
    }

    /**
     * @override
     * @param { Document } dom 
     */
    findChapterTitle(dom) {
        return dom.querySelector("h1.pt10");
    }

    /**
     * @override
     * @param { Document } dom 
     */
    extractTitleImpl(dom) {
        /** @type { HTMLMetaElement | null } */
        const meta = dom.querySelector("meta[property='og:title");

        return meta?.content;
    }

    /**
     * @override
     * @param { Document } dom 
     */
    extractDescription(dom) {
        /** @type { HTMLMetaElement | null } */
        const meta = dom.querySelector("meta[property='og:description");

        return meta?.content?.replace(/<span.*?>/, "");
    }

    /**
     * @override
     * @param { Document } dom 
     */
    extractSubject(dom) {
        /** @type { HTMLMetaElement | null } */
        const meta = dom.querySelector("meta[property='og:novel:category");

        return meta?.content;
    }

    /**
     * @override
     * @param { Document } dom 
     */
    extractAuthor(dom) {
        /** @type { HTMLMetaElement | null } */
        const meta = dom.querySelector("meta[property='og:novel:author");

        return meta?.content;
    }

    /**
     * @override
     */
    extractLanguage() {
        return "zh";
    }

    /**
     * @override
     * @param { Document } dom 
     */
    findCoverImageUrl(dom) {
        /** @type { HTMLMetaElement | null } */
        const meta = dom.querySelector("meta[property='og:image']");

        return meta?.content;
    }
}