export default{
    dataMyHeader(){
        localStorage.setItem("myHeader", JSON.stringify({
            title: {
                name: "Bugatti",
                href: "#"
            },
            company:[
                {
                    name:"History",
                    href:"#"
                },
                {
                    name:"Models",
                    href:"#"
                },
                {
                    name:"Competition",
                    href:"#"
                },
                {
                    name:"Prototypes",
                    href:"#"
                },
                {
                    name:"Prices",
                    href:"#"
                },
                {
                    name:"Other realizations",
                    href:"#"
                },
            ],
        }))
    },
    dataMyBanner(){
        localStorage.setItem("myBanner", JSON.stringify({
            content:{
                titulo: "Bugatti",
                paragrapth: "Bugatti is a French luxury and competition automobile brand founded in 1909 by Ettore Bugatti (1881-1947) in Molsheim.1 It is currently owned by the Volkswagen Group.",
                btn:{
                    name: "Continue........",
                    href: "https://es.wikipedia.org/wiki/Bugatti"
                },
            },
            image:"img/bugatti-voiture-noire-3.webp",
            
        }))
    },
    dataMyPost(){
        localStorage.setItem("myPost", JSON.stringify({
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
        }))
    },

}