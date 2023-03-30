import config from "../storage/config.js";
export default{
    
    showFourthArticle(){
        config.dataFourthArticle();
        Object.assign(this, JSON.parse(localStorage.getItem("fourthArticle")))
        const ws = new Worker("storage/wsMyFourthArticle.js", {type: "module"});
        let id = [];
        let count = 0;
        id.push("#fourthArticle");
        ws.postMessage({module: "showFourthArticles", data: this.article});
        id.push("#fourthArticle");
        ws.postMessage({module: "showSubFourthArticle", data: this.link});
    
        ws.addEventListener("message", (e)=>{
            let doc = new DOMParser().parseFromString(e.data, "text/html");
            document.querySelector(id[count]).append(...doc.body.children);
            (id.length-1==count) ? ws.terminate(): count++;
        })

    }
}