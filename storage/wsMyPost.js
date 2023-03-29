let wsMyPost = {
    showPost(p1) {
        let plantilla = p1.map((val, id) => { return`
        <div class="col-md-6">
            <div class="row g-0 border rounded mb-4 shadow-sm h-md-250 position-relative" id="cards">
                <div class="col p-4 d-flex flex-column position-static">
                <h3 class="mb-0">${val.tittle}</h3>
                <div class="mb-1 text-muted ">${val.date}</div>
                <p class="card-text mb-auto">${val.paragraph}</p>                   
                <a href="${val.btn.href}" class="stretched-link ">${val.btn.name}</a>
                </div>
                <div class="col-auto d-none d-lg-block">
                <img src="${val.image}" class="responsiveImg">
                </div>
            </div>
        </div>
        `
    })
    return plantilla.join('');
    }
}

self.addEventListener("message", (e)=>{
    postMessage(wsMyPost[`${e.data.module}`](e.data.data));
})