let wsFirtsArticle = {
    showFirtsArticle(p1){
        return `
        <h2 class="blog-post-title">${p1.tittle}</h2>
        <p class="blog-post-meta border-bottom">January 1, 2021 by <a href="#">Mark</a></p>
        <h3 class="pb-4 mb-4 fst-italic ">${p1.subTittle}</h3>
        <p>${p1.paragraph}</p>
        <p>${p1.paragraph2}</p>
        <h3 class="pb-4 mb-4 fst-italic ">${p1.subTittle1}</h3>
        <p>${p1.fParagraph}</p>
        <p>${p1.fParagraph1}</p>
        <p>${p1.fParagraph2}</p>
        <h3 class="pb-4 mb-4 fst-italic ">${p1.subTittle2}</h3>
        <p>${p1.eParagraph}</p>
        <p>${p1.eParagraph1}</p>
        <p>${p1.eParagraph2}</p>
        <h3 class="pb-4 mb-4 fst-italic ">${p1.subTittle3}</h3>
        `
    },
    showSubFirtsArticle(p1){
        return `
        <div class="row">
        <div class="col-12 sm-2 col-md-12 col-lg-6">
            <h5 class="pb-4 mb-4 fst-italic ">${p1.fTitle}</h5>
            <ul>
                <li><a href="${p1.href}">${p1.name} </a> ${p1.title}</li><br>
                <li><a href="${p1.href1}">${p1.name1}</a> ${p1.title1}</li><br>
                <li><a href="${p1.href2}">${p1.name2}</a>${p1.title2}</li><br>
                <li><a href="${p1.href3}">${p1.name3}</a>${p1.title3}</li>
            </ul>
        </div>
        <div class="col-12 col-md-12 col-lg-6">
            <h5 class="pb-4 mb-4 fst-italic ">${p1.fTitle1}</h5>
            <ul>
                <li><a href="${p1.href4}">${p1.name4}</a>${p1.title4}</li><br>
                <li><a href="${p1.href5}">${p1.name5}</a>${p1.title5}</li><br>
                <li><a href="${p1.href6}">${p1.name6}</a>${p1.title6}</li>
            </ul>
        </div>
        </div>
        `
    }
}

self.addEventListener("message", (e)=>{
    postMessage(wsFirtsArticle[`${e.data.module}`](e.data.data));
})