import config from "../storage/config.js";
export default {
    showTableThirdArticule() {
    config.dataThirdArticle();
    Object.assign(this, JSON.parse(localStorage.getItem("thirdArticle")))
    const ws = new Worker("storage/wsMyThirdArticle.js", {type:"module"});
    let id = [];
    let count = 0;
    id.push("#thirdArticle");
    ws.postMessage({module: "showThirdArticle", data: this.article});
    id.push("#thirdArticle");
    ws.postMessage({module: "showtableThirdArticle", data: this.article});

    ws.addEventListener("message", (e)=>{
        let doc = new DOMParser().parseFromString(e.data, "text/html");
        document.querySelector(id[count]).append(...doc.body.children);
        (id.length-1==count) ? ws.terminate() : count++;
    })
    }
}