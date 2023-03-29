import config from "../storage/config.js";
export default{
    showSecondArticule(){
    config.dataSecondArticle();
    Object.assign(this, JSON.parse(localStorage.getItem("secondArticle")))
    const ws = new Worker("storage/wsMySecondArticle.js", {type:"module"});
    let id = [];
    let count = 0;
    id.push("#secondArticule");
    ws.postMessage({module: "showSecondArticle", data: this.article});
    id.push("#secondArticule");
    ws.postMessage({module: "showSubSecondArticle", data: this.link});

    ws.addEventListener("message", (e)=>{
        let doc = new DOMParser().parseFromString(e.data, "text/html");
        document.querySelector(id[count]).append(...doc.body.children);
        (id.length-1==count) ? ws.terminate() : count++;
    })
    },
}