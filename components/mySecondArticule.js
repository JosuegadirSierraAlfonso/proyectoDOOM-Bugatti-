export default{
    article: [{
        tittle: "Prototypes",
        subTittle: "January 1, 2021 by"
    }],
    link: [
        {
        name: "Bugatti ID 90",
        date: "1990 ",
        href: "https://es.wikipedia.org/wiki/Bugatti_ID_90"
    },
    {
        name: "Bugatti EB112",
        date: "1993 ",
        href: "https://es.wikipedia.org/wiki/Bugatti_EB112"
    },
    {
        name: "Bugatti EB118",
        date: "1998 ",
        href: "https://es.wikipedia.org/wiki/Bugatti_EB118"
    },
    {
        name: "Bugatti EB218",
        date: "1999 ",
        href: "https://es.wikipedia.org/wiki/Bugatti_EB218"
    },
    {
        name: "Bugatti 18/3 Chiron",
        date: "1999 ",
        href: "https://es.wikipedia.org/wiki/Bugatti_18/3_Chiron"
    },
    {
        name: "Bugatti 16C Galibier",
        date: "2009 ",
        href: "https://es.wikipedia.org/wiki/Bugatti_16C_Galibier"
    },
    {
        name: "Bugatti Stratos",
        date: "2009 ",
        href: "https://es.wikipedia.org/wiki/Bugatti_Stratos"
    },
],
    showSecondArticule(){
        this.article.forEach((val,id) => {
            document.querySelector("#secondArticule").insertAdjacentHTML("beforeend",`
            <h2 class="blog-post-title">${val.tittle}</h2>
            <p class="blog-post-meta border-bottom">${val.subTittle}<a href="#">Mark</a></p><br><br>
            `);
        });
    },
    showSubSecondArticule(){
        this.link.forEach((val,id) => {
            document.querySelector("#secondArticule").insertAdjacentHTML("beforeend",`
            <ol>
                <li>${val.date}<a href="${val.href}">${val.name}</a></li><br>

            </ol>
            `);
        });
    },
}


