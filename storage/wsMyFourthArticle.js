let wsFourthArticle = {
    showFourthArticles(p1){
        return `
        <h2 class="blog-post-title">${p1.tittle}</h2>
        <p class="blog-post-meta border-bottom">${p1.subTittle}<a href="#">Chris</a></p>
        <p>${p1.paragraph}</p><br>
        `
    },
    showSubFourthArticle(p1){
        return`
            <div class="row">
                <div class="col-12 col-md-12 col-lg-6">
                <h5 class="mb-4 fst-italic">${p1.title}</h5>
                <ul>
                    <li><a href="${p1.href}">${p1.name}</a>${p1.text}</li>
                </ul>
                <div class="col-auto d-none d-lg-block">
                    <img src="${p1.img}" class="rounded mx-auto d-block responsiveImg">
                </div>
                </div>
                <div class="col-12 col-md-12 col-lg-6">
                <h5 class="mb-4 fst-italic">${p1.title1}</h5>
                <ul>
                    <li><a href="${p1.href1}">${p1.name1}</a>${p1.text1}</li>
                </ul><br>
                <div class="col-auto d-none d-lg-block">
                    <img src="${p1.img1}" class="rounded mx-auto d-block responsiveImg">
                </div>
                </div>
            </div>
            `
    },
}

self.addEventListener("message", (e)=>{
    postMessage(wsFourthArticle[`${e.data.module}`](e.data.data));
})