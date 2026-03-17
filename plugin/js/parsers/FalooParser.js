"use strict";

parserFactory.register("b.faloo.com", () => new FalooParser());

class FalooParser extends Parser {
    constructor() {
        super();

        // <1500 isn't safe for books >30 chapters.
        // >2000 is safe for books of any size.
        this.minimumThrottle = 2000;
    }

    async getChapterUrls(dom) {
        let tocUrl = dom.querySelector(".T-L-T-C-Box2 a:nth-child(4)");

        let tocDom = (await HttpClient.wrapFetch(tocUrl)).responseXML;

        let nodes = [...tocDom.querySelectorAll("div.c_con_list, .c_con_viptitle")];

        let isVipReached = false;
        let chapters = [];

        for (let node of nodes) {
            if (node.classList.contains("c_con_viptitle")) {
                isVipReached = true;
                continue;
            }

            let links = node.querySelectorAll("div.c_con_li_detail_p a, a.c_con_li_detail");

            for (let link of links) {
                let span = link.querySelector("span");
                let title = span.textContent.trim();

                chapters.push({
                    sourceUrl: link.href, 
                    title: title,
                    isIncludeable: !isVipReached
                });
            }
        }

        return chapters;
    }

    findContent(dom) {
        return dom.querySelector(".noveContent");
    }

    extractTitleImpl(dom) {
        return dom.querySelector("#novelName");
    }

    extractAuthor(dom) {
        let authorLabel = dom.querySelector("a.fs14");
        return authorLabel?.textContent ?? super.extractAuthor(dom);
    }

    extractLanguage() {
        return "zh-CN";
    }

    extractSubject(dom) {
        let tags = [...dom.querySelectorAll("div.T-R-T-B2-Box1 a")];
        return tags.map(e => e.textContent.trim()).join(", ");
    }

    extractDescription(dom) {
        return dom.querySelector(".T-L-T-C-Box1").textContent.trim();
    }

    findChapterTitle(dom) {
        return dom.querySelector(".c_l_title h1");
    }

    findCoverImageUrl(dom) {
        return dom.querySelector(".imgcss").src;
    }

    async fetchChapter(url) {
        return (await HttpClient.wrapFetch(url, this.makeOptions())).responseXML;
    }

    makeOptions() {
        return ({
            makeTextDecoder: () => new TextDecoder("gb2312")
        });
    }
}