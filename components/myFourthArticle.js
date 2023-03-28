export default{
    article: [{
        tittle: "Other realizations",
        subTittle: "December 14, 2020 by ",
        paragraph: "In addition to its renowned automobiles, Bugatti undertook some striking, although few, achievements in other fields:"
    }],
    link: [
        {
        title: "Railways",
        name: "Bugatti railcar, ",
        href: "https://es.wikipedia.org/wiki/Automotor_Bugatti",
        text: "a passenger train designed to take advantage of surplus engines from the commercially unsuccessful Bugatti Royale",
        img: "img/Autorail_Bugatti_photo_2.JPG",

        title1: "Aircraft",
        name1: "Bugatti Model 100,",
        href1: "https://es.wikipedia.org/wiki/Bugatti_Model_100",
        text1: "Bugatti Model 100, an airplane designed in 1939 to compete in speed trials",
        img1: "img/Bugattii100display.jpg",
    },
],
    showFourthArticle(){
        this.article.forEach((val,id) => {
            document.querySelector("#fourthArticle").insertAdjacentHTML("beforeend",`
            <h2 class="blog-post-title">${val.tittle}</h2>
            <p class="blog-post-meta border-bottom">${val.subTittle}<a href="#">Chris</a></p>
            <p>${val.paragraph}</p><br>
            `);
        });
    },
    showSubFourthArticle(){
        this.link.forEach((val,id) => {
            document.querySelector("#fourthArticle").insertAdjacentHTML("beforeend",`
            <div class="row">
                <div class="col-12 col-md-12 col-lg-6">
                <h5 class="mb-4 fst-italic">${val.title}</h5>
                <ul>
                    <li><a href="${val.href}">${val.name}</a>${val.text}</li>
                </ul>
                <div class="col-auto d-none d-lg-block">
                    <img src="${val.img}" class="rounded mx-auto d-block responsiveImg">
                </div>
                </div>
                <div class="col-12 col-md-12 col-lg-6">
                <h5 class="mb-4 fst-italic">${val.title1}</h5>
                <ul>
                    <li><a href="${val.href1}">${val.name1}</a>${val.text1}</li>
                </ul><br>
                <div class="col-auto d-none d-lg-block">
                    <img src="${val.img1}" class="rounded mx-auto d-block responsiveImg">
                </div>
                </div>
            </div>
            `);
        });
    },
}