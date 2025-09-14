"use strict";

parserFactory.register("tongrenshe.cc", () => new TongrensheParser());

class TongrensheParser extends Parser { // eslint-disable-line no-unused-vars
    constructor() {
        super();
    }

    async getChapterUrls(dom) {
        let menu = dom.querySelector(".book_list");
        return util.hyperlinksToChapterList(menu);
    }

    findContent(dom) {
        return dom.querySelector("div.read_chapterDetail");
    }

    extractTitleImpl(dom) {
        return dom.querySelector(".infos h1");
    }

    extractLanguage() {
        return "zh";
    }

    findChapterTitle(dom) {
        return dom.querySelector("div.read_chapterName h1");
    }

    findCoverImageUrl(dom) {
        return util.getFirstImgSrc(dom, ".pic");
    }

    async fetchChapter(url) {
        let options = { makeTextDecoder: () => new TextDecoder("gbk") };
        return (await HttpClient.wrapFetch(url, options)).responseXML;
    }

    getInformationEpubItemChildNodes(dom) {
        return [...dom.querySelectorAll(".infos p")];
    }
}
