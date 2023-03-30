import config from "../storage/config.js";
export default{
    
    showFooter(){
        config.dataMyFooter();
        Object.assign(this, JSON.parse(localStorage.getItem("myFooter")))
        const ws = new Worker("storage/wsMyFooter.js", {type: "module"});
        let id = [];
        let count = 0;
        id.push("#foot");
        ws.postMessage({module: "showFooter", data: this.logos});
        id.push("#foot");
        ws.postMessage({module: "showSubFooter", data: this.ref});
    
        ws.addEventListener("message", (e)=>{
            let doc = new DOMParser().parseFromString(e.data, "text/html");
            document.querySelector(id[count]).append(...doc.body.children);
            (id.length-1==count) ? ws.terminate(): count++;
        })
    },
}