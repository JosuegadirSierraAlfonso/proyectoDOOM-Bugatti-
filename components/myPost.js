export default{
    post:[
        {
            article: "FOR SERVERS",
            tittle: "Bugatti Veyron",
            date: "nov 12",
            paragraph:`La versión básica del Veyron 16.4 se fabricó hasta 2011 y más tarde las versiones Grand Sport y Super Sport se iniciaron entre 2009 y 2010. En el episodio final de la temporada 14 durante el "Top Gear Awards Ceremony", Jeremy Clarkson decidió que, siendo el final de una década (2000-2010), deberían premiar también el Coche de la Década, así que Clarkson comentó que el ganador de este premio tenía que ser el Bugatti Veyron, el único coche merecedor. Desde que el formato de Top Gear comenzara a principios de la década de 1990, solamente se ha otorgado una vez este premio. El nombre del coche es un reconocimiento a uno de los pilotos históricos de la marca: el francés Pierre Veyron. `,
            image: "img/Bugatti_Veyron_16.4_–_Frontansicht_(1),_5._April_2012,_Düsseldorf.jpg",
            btn:{
                name: "Continuar...",
                href:"#"
            }
            
        },
        {
            tittle: "Vision Gran Turismo",
            date: "nov 12",
            paragraph:`El Bugatti Vision Gran Turismo es un concepto diseñado por Bugatti y fue presentado en el Salón del Automóvil de Fráncfort 2015.1​ Seis modelos fueron diseñados para el evento. Este diseño de concepto influyó en la producción del Bugatti Chiron y del Bugatti Divo. El diseño del vehículo se basa en el ganador de las 24 Horas de Le Mans, el Bugatti Type 57C Tank. El vehículo tiene un motor W16, similar al del Veyron, que produce 1650 CV y 1165 ftlb. El motor del Bugatti proporciona energía a las cuatro ruedas. `,
            image: "img/Bugatti_Vision_at_IAA_2015_in_Frankfurt.JPG",
            btn:{
                name: "Continuar...",
                href:"#"
            }
            
        },
        {
            article: "FOR SERVERS",
            tittle: "Bugatti Chiron",
            date: "nov 12",
            paragraph:`El Bugatti Chiron es un automóvil superdeportivo cupé de dos puertas biplaza, con motor central-trasero montado longitudinalmente y de tracción integral, diseñado y desarrollado por Bugatti Automobiles S.A.S., filial del Grupo Volkswagen. Fue presentado en el Salón del Automóvil de Ginebra 2016 como el sucesor del Bugatti Veyron.4​

            Su producción estaba limitada a 500 unidades, de las cuales 120 ya habían sido vendidas a un precio de 2 400 000 de € cada una como mínimo sin contar impuestos, es decir, alrededor de 1 900 000 de £ o US$2 900 000 ($3 274 362 en 2023).5​
            
            En octubre de 2021, se anunciaba el lanzamiento de los últimos 40 ejemplares, que serían una mezcla entre las variantes Chiron Super Sport y Pur Sport, con lo que llegaba al final de su etapa de producción.6​ `,
            image: "img/Bugatti Chiron.jpg",
            btn:{
                name: "Continuar...",
                href:"#"
            }
            
        },
        {
            article: "FOR SERVERS",
            tittle: "Bugatti Divo",
            date: "nov 12",
            paragraph:`Su nombre es un homenaje al piloto de carreras francés Albert Divo, quien corrió para Bugatti en la década de 1920, venciendo dos veces en la carrera Targa Florio.`,
            image: "img/Bugatti_Divo.jpg",
            btn:{
                name: "Continuar...",
                href:"#"
            }
            
        },
        {
            article: "FOR SERVERS",
            tittle: "Bugatti La Voiture Noire",
            date: "nov 12",
            paragraph:`La Voiture Noire representa un homenaje al Type 57 SC Atlantic, diseñado por Jean Bugatti (hijo de Ettore Bugatti), y del que solo se produjeron cuatro unidades entre 1936 y 1938, de las que tres fueron vendidas a particulares. El primer coche, originalmente gris azulado, identificado con el número de chasis 57 374 y conocido como "Rothschild Atlantic", fue comprado por el banquero británico Victor Rothschild. El tercer automóvil construido, el "Holzschuh Atlantic", con el número de chasis 57 473, fue entregado al coleccionista francés Jacques Holzschuh en octubre de 1936. El segundo propietario murió en un accidente en un paso a nivel, en el que el automóvil quedó prácticamente destruido por completo. Décadas más tarde se sometió a una compleja restauración, aunque el motor no se pudo recuperar. El último Atlantic producido, el "Pope Atlantic", con el número de identificación 57 591, se completó en mayo de 1938 y tuvo al multimillonario británico Briton R. B. Pope como primer propietario. Este automóvil pertenece actualmente al diseñador estadounidense Ralph Lauren.`,
            image: "img/Bugatti_La_Voiture_Noire.jpg",
            btn:{
                name: "Continuar...",
                href:"#"
            }
            
        },

    ],
    showPost(){
        this.post.forEach((val,id) => {
            document.querySelector("#post").insertAdjacentHTML("beforeend",`
            <div class="col-md-6">
                <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" id="cards">
                    <div class="col p-4 d-flex flex-column position-static">
                    <strong class="d-inline-block mb-2 text-primary">${val.article}</strong>
                    <h3 class="mb-0">${val.tittle}</h3>
                    <div class="mb-1 text-muted ">${val.date}</div>
                    <p class="card-text mb-auto overflow-auto" style="height: 99px;">${val.paragraph}</p>
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