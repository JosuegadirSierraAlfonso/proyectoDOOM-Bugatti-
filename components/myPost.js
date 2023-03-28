export default{
    post:[
        {
            tittle: "Bugatti Veyron",
            date: "nov 12",
            paragraph:`The basic version of the Veyron 16.4 was produced until 2011 and later the Grand Sport and Super Sport versions were launched between 2009 and 2010.`,
            image: "img/Bugatti Veyron-25.jpg",
            btn:{
                name: "Continue...",
                href:"https://es.wikipedia.org/wiki/Bugatti_Veyron"
            }
            
        },
        {
            tittle: "Vision Gran Turismo",
            date: "nov 12",
            paragraph:`The Bugatti Vision Gran Turismo is a concept designed by Bugatti and was unveiled at the 2015 Frankfurt Motor Show. Six models were designed for the event. `,
            image: "img/bugatti-vision-gran-turismo-concept-2015-vray-01.jpg",
            btn:{
                name: "Continue...",
                href:"https://es.wikipedia.org/wiki/Bugatti_Vision_Gran_Turismo"
            }
            
        },
        {
            tittle: "Bugatti Chiron",
            date: "nov 12",
            paragraph:`The Bugatti Chiron is a two-seater, mid-rear engine, longitudinally mounted, all-wheel drive, two-door coupe super sports car.`,
            image: "img/bugatti-chiron-profilexe-1.jpg_638132621.webp",
            btn:{
                name: "Continue...",
                href:"https://es.wikipedia.org/wiki/Bugatti_Chiron"
            }
            
        },
        {
            tittle: "Bugatti Divo",
            date: "nov 12",
            paragraph:`It is inspired by the Bugatti Type 57SC Atlantic and the Bugatti Vision Gran Turismo, from which design and track performance have been taken as the starting point as main references.`,
            image: "img/Bugatti_Divo.jpg",
            btn:{
                name: "Continuar...",
                href:"https://es.wikipedia.org/wiki/Bugatti_Divo"
            }
            
        },
        {
            tittle: "Bugatti La Voiture Noire",
            date: "nov 12",
            paragraph:`La Voiture Noire represents a tribute to the Type 57 SC Atlantic, designed by Jean Bugatti (son of Ettore Bugatti), and of which only four units were produced between 1936 and 1938.`,
            image: "img/Bugatti_La_Voiture_Noire.jpg",
            btn:{
                name: "Continuar...",
                href:"https://es.wikipedia.org/wiki/Bugatti_La_Voiture_Noire"
            }
            
        },

    ],
    showPost(){
        this.post.forEach((val,id) => {
            document.querySelector("#post").insertAdjacentHTML("beforeend",`
            <div class="col-md-6">
                <div class="row g-0 border rounded mb-4 shadow-sm h-md-250 position-relative" id="cards">
                    <div class="col p-4 d-flex flex-column position-static">
                    <h3 class="mb-0">${val.tittle}</h3>
                    <div class="mb-1 text-muted ">${val.date}</div>
                    <p class="card-text mb-auto">${val.paragraph}</p>                   
                    <a href="${val.btn.href}" class="stretched-link">${val.btn.name}</a>
                    </div>
                    <div class="col-auto d-none d-lg-block">
                    <img src="${val.image}" class="responsiveImg">
                    </div>
                </div>
            </div>
            `);
        });
    }
}