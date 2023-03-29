let wsMyHeader = {
    listarTitle(p1){
        return `<a class="blog-header-logo text-white" href="#">${p1.name}</a>`
    }, 
    listarCompany(p1){
        let plantilla ="";
        p1.forEach((val,id) => {
            plantilla += `<a class="p-2 link-secondary" href="#">${val.name}</a>`;
        });
        return plantilla;
    }
}

self.addEventListener("message", (e)=>{
    postMessage(wsMyHeader[`${e.data.module}`](e.data.data));
})