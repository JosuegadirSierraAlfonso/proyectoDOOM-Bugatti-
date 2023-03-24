export default{
    article:[
        {
            tittle: "Competition",
            subTittle: "Great prizes",
            paragraph:`Due to both its innovation and its many years of experience, Bugatti in its traditional blue19 was a highly respected and admired brand that rivaled the most iconic brands of the time in terms of style and sportiness. A brand that despite being French, was founded in an area of Alsace that was then part of Prussia, by Ettore Bugatti, of Italian descent.
            `,
            paragraph2:`The Bugatti Type 35 was the most successful car in racing for Bugatti and undoubtedly one of the most
            successful in the entire history of motorsport, with a total of victories exceeding a thousand 
            (in its heyday, the T35, which participated in a endless races, he had an overwhelming average of 14 wins per week). 
            Among these is the success in the 1926 World Championship for Manufacturers and the five consecutive victories in the Targa Florio,
            from 1925 to 1929.
            `,  
        },
    ],


    showFirstArticle(){
        this.article.forEach((val,id) => {
            document.querySelector("#firstArticle").insertAdjacentHTML("beforeend",`
            <h2 class="blog-post-title">${val.tittle}</h2>
            <p class="blog-post-meta border-bottom">January 1, 2021 by <a href="#">Mark</a></p>
            <h3 class="pb-4 mb-4 fst-italic ">${val.subTittle}</h3>
            <p>${val.paragraph}</p>
            <p>${val.paragraph2}</p>
 
            `);
        });
    }
}


/*  */