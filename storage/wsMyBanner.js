let wsMyBanner = {
    showBanner(p1){
        return `
        <h1 class="display-4 fst-italic text-with text-center">${p1.titulo}</h1>
        <p class="lead text-white text-center">${p1.paragrapth}</p>
        <p class="lead mb-0"><a href="${p1.btn.href}" class="text-white fw-bold">${p1.btn.name}</a></p>`
    }
}

self.addEventListener("message", (e)=>{
    postMessage(wsMyBanner[`${e.data.module}`](e.data.data));
})