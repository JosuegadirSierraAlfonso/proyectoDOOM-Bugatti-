let wsThirdArticle = {
    showThirdArticle(p1){
        return `
        <h2 class="blog-post-title">${p1.title}</h2>
        <p class="blog-post-meta border-bottom">${p1.subTittle}<a href="#">Jacob</a></p>
        <h3>${p1.titleTable}</h3>
        <p class="dark-text">${p1.paragraph}</p>
        `
    },
    showtableThirdArticle(p1){
        let plantilla = p1.table.map((val, id)=>{
            return`
            <table class="table bg-light">
                <thead>
                    <tr>
                    ${val.thead.map((val, id)=>{return `<th>${val.name}</th>`}).join("")}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    ${val.tbody.map((val, id) => `
                    <tr>
                    <td>${val.award}</td>
                    <td>${val.age}</td>
                    <td>${val.description}</td>
                    </tr>
                    </tr>`).join("")}
                </tbody>
            </table>
            <p>${p1.paragraph1}</p>
            `
        });
        return plantilla.join("")
    },
}
self.addEventListener("message", (e)=>{
    postMessage(wsThirdArticle[`${e.data.module}`](e.data.data));
})