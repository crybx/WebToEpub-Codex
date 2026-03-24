
"use strict";

parserFactory.register("lumostories.com", () => new LumosStoriesParer());
parserFactory.register("api.lumostories.com", () => new LumosStoriesParer());


class LumosStoriesParer extends Parser { 
    constructor() {
        super();
        this.minimumThrottle = 3000;
    }

    /**
     * 
     * @returns {"https://api.lumostories.com/api/v1"}
     */
    getApiBaseUrl() {
        return "https://api.lumostories.com/api/v1";
    }

    /**
     * @param {HTMLDocument} dom
     * @returns {String}
     */
    getBookId(dom) {
        // URI looks like
        //https://lumostories.com/en/story/216/chapters/
        // https://lumostories.com/en/story/216/
        return  dom.baseURI.split("/")[5];
    }

    /**
     * @param {HTMLDocument} dom 
     */
    async getChapterUrls(dom) {
        let id = this.getBookId(dom);
        let book = (await HttpClient.fetchJson(`${this.getApiBaseUrl()}/books/${id}`)).json;

        return book.chapters.map((ch) => ({
            sourceUrl: `${this.getApiBaseUrl()}/book_chapters/${ch.id}/content?title=${ch.title}`,
            title: `Chapter ${ch.number} - ${ch.title}`,
            isIncludeable: new Date() >= new Date(ch.release_date)
        })).reverse();
    }

    /**
    * @param {HTMLDocument} dom 
    */
    async loadEpubMetaInfo(dom) {
        let id = this.getBookId(dom);
        let book = (await HttpClient.fetchJson(`${this.getApiBaseUrl()}/books/${id}`)).json;
        this.title = book.name;
        this.author = book.author.username;
        this.description = book.summary?.trim();
        this.subject = book.tags.map((tag) => tag.name).join(", ");
        return;
    }
   
    extractTitleImpl() {
        return this.title;
    }

    extractAuthor() {
        return this.author;
    }

    extractDescription() {
        return this.description;
    }

    /**
    * @param {HTMLDocument} dom 
    */
    findContent(dom) {
        return dom.querySelector("body");
    }

    /**
    * @param {HTMLDocument} dom 
    */
    findCoverImageUrl(dom) {
        let title = dom.querySelector("h1").textContent ?? "";
        let img = dom.querySelector(`img[alt="${title}"]`);

        return img?.src ?? null;
    }

    /**
    * @param {String} url
    */
    async fetchChapter(url) {
        let search = new URLSearchParams(new URL(url).search);
        let chapterUrl = (await HttpClient.fetchText(url.replace(/\?.*$/, ""))).replaceAll("\"", "");
        /** @type {HTMLDocument} */
        let html = (await HttpClient.wrapFetch(chapterUrl)).responseXML;
        
        let title = search.get("title");

        if (title) {
            let body = html.querySelector("body");

            let h1 = html?.createElement("h1");

            h1.textContent = title;
            body.prepend(h1);
        }


        return html;
    }

    isCustomError(response) {
        const hasError = response?.responseXML.querySelector("error");

        if (!hasError) return false;

        return true;
    }

    setCustomErrorResponse(url, wrapOptions, checkedresponse) {
        if (!checkedresponse?.ok) {
            let newresp = {};
            newresp.url = url;
            newresp.wrapOptions = wrapOptions;
            newresp.response = {};
            newresp.response.url = checkedresponse.response.url;
            newresp.response.status = checkedresponse?.status;
            return newresp;
        }
    }

}
