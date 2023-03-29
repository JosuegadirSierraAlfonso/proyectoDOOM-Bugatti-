let wsSecondArticle = {
    showSecondArticle(p1){
        return `
        <h2 class="blog-post-title">${p1.tittle}</h2>
        <p class="blog-post-meta border-bottom">${p1.subTittle}<a href="#">Mark</a></p><br><br>
        `
    },
    showSubSecondArticle(p1){
        let plantilla ="";
        p1.forEach((val,id) => {
            plantilla += `  <ol>
                                <li>${val.date}<a href="${val.href}">${val.name}</a></li><br>
                            </ol>
                        `;
        });
        return plantilla;
    }
}

self.addEventListener("message", (e)=>{
    postMessage(wsSecondArticle[`${e.data.module}`](e.data.data));
})