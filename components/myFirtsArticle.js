import config from "../storage/config.js";
export default{
    showFirstArticle(){
      config.dataFirtsArticle();
      Object.assign(this, JSON.parse(localStorage.getItem("firtssArticle")))
      const ws2 = new Worker("storage/wsMyFirtsArticle.js", {type:"module"});
      let id2 = [];
      let count2 = 0;
      id2.push("#firstArticle");
      ws2.postMessage({module: "showFirtsArticle", data: this.article});
      id2.push("#firstArticle");
      ws2.postMessage({module: "showSubFirtsArticle", data: this.subArticle});

      ws2.addEventListener("message", (e)=>{
          let doc2 = new DOMParser().parseFromString(e.data, "text/html");
          document.querySelector(id2[count2]).append(...doc2.body.children);
          (id2.length-1==count2) ? ws2.terminate() : count2++;
      })
    },
}