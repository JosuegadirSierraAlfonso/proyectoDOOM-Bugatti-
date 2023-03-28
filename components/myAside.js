export default{
    nav:[
        {
            title: "News",
        },
        {
            title: "A Bugatti for sale at Costco: This is the firm's new electric scooter",
            subTitle: "Industry",
            paragraph: "It was created by Bugatti in conjunction with the Bytech company; the frame is made of a magnesium alloy and supports a maximum weight of 109 kg.",
            link:[
                {
                    name: "More info",
                    
                    href: "https://www.motorpasion.com.mx/industria/bugatti-scooter"
                },
            ],
        },
        {
            title: "Bugatti Sure Measure, the new customization program debuts with this impressive Chiron Pur Sport",
            subTitle: "Industry",
            paragraph: "This is the program called Sur Mesure, which offers its customers an interesting and vast catalog of personalization so that each copy is practically unique in the world.",
            link:[
                {
                    name: "More info",
                    
                    href: "https://www.motorpasion.com.mx/industria/bugatti-sure-mesure-nuevo-programa-personalizacion"
                },
            ],
        },
        {
            title: "A Bugatti EB112 goes on sale, a super sedan with V12 and that will surely cost more than a ChironA Bugatti for sale at Costco: This is the firm's new electric scooter",
            subTitle: "Industry",
            paragraph: "A Bugatti EB112 goes on sale, a super sedan with V12 and that will surely cost more than a Chiron",
            link:[
                {
                    name: "More info",
                    
                    href: "https://www.motorpasion.com.mx/industria/bugatti-eb112-a-venta-sedan"
                },
            ],
        },
        {
            title: "Remember the Bugatti La Voiture Noire? Comeback in the form of champagne with a carbon fiber bottle",
            subTitle: "Industry",
            paragraph: "The firm from Molsheim and champagne Carbon, have decided to come together to take that exquisite design of the French house and the bubbly flavor of the golden liquid a little further.",
            link:[
                {
                    name: "More info",
                    
                    href: "https://www.motorpasion.com.mx/industria/bugatti-champagne-bouteille-noire"
                },
            ],
        },
        {
            title: "Bugatti Chiron reaches the final stage of its production with the last 40 units",
            subTitle: "Industry",
            paragraph: "It was in 2016 when the model came to light, a vehicle that captivated the world industry with its more than 1,000 hp.",
            link:[
                {
                    name: "More info",
                    
                    href: "https://www.motorpasion.com.mx/industria/bugatti-chiron-llega-a-punto-finalizar-produccion"
                },
            ],
        },
    ],



    showAside(){
        const data = this.nav.map((val,id) => {
            return (
                (val.link)
                    ? this.list(val)
                    : this.cards(val)
            );
        });
        document.querySelector("#nav").insertAdjacentHTML("beforeend",data.join("<br>"))
    },
    cards(p1){
        return`
        <div class="p-4 mb-3 news">
            <h4 class="fst-italic">${p1.title}</h4>
        </div>
        `;
    },
    list(p1){
        return`
        <div class="card text-white">
            <div class="card-body">
              <h5 class="card-title">${p1.title}</h5>
              <div class="mb-1 text-danger">${p1.subTitle}</div>
              <p class="card-text">${p1.paragraph}</p>
              ${p1.link.map((val, id) =>  `<a href="${val.href}" class="btn btn-dark">${val.name}</a>`).join("")}
            </div>
        </div>
        `;
    },

}


/*
 <div class="p-4">
<h4 class="fst-italic">${p1.title}</h4>
<ol class="list-unstyled mb-0">
    ${p1.link.map((val, id) =>  `<li><a href="${val.href}">${val.name}</a></li>`).join("")}
</ol>
</div> 
*/