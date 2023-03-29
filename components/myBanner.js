import config from "../storage/config.js";
export default{
    showImage(){
        config.dataMyBanner();
        Object.assign(this, JSON.parse(localStorage.getItem("myBanner")))
        document.querySelector(".img-bugatti").style.backgroundImage = `url(${this.image})`;
    },
    showSectionBanner(){
        const ws2 = new Worker("storage/wsMyBanner.js", {type:"module"});
        let id2 = [];
        let count2 = 0;
        id2.push("#banner");
        ws2.postMessage({module: "showBanner", data: this.content});
        ws2.addEventListener("message", (e)=>{
            let doc2 = new DOMParser().parseFromString(e.data, "text/html");
            document.querySelector(id2[count2]).append(...doc2.body.children);
            (id2.length-1==count2) ? ws2.terminate() : count2++;
        })
    }


}
