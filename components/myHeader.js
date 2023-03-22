export default{
    title: "Bugatti",
    company:[
        {
            name:"Historia",
            href:"#"
        },
        {
            name:"Competición",
            href:"#"
        },
        {
            name:"Prototipos",
            href:"#"
        },
        {
            name:"Modelos",
            href:"#"
        },
        {
            name:"Resultados",
            href:"#"
        },
        {
            name:"Otras realizaciones",
            href:"#"
        },
    ],


    listarTitle(){
        document.querySelector("#title").insertAdjacentHTML("beforeend", 
        `<a class="blog-header-logo text-dark" href="#">${this.title}</a>`)
    },
    
    listarCompany(){
        let plantilla ="";
        this.company.forEach((val,id) => {
            plantilla += `<a class="p-2 link-secondary" href="#">${val.name}</a>`;
        });
        document.querySelector("#company").insertAdjacentHTML("beforeend",plantilla);
    }


}


/* 

     Historia

    1.1 Ettore Bugatti
    1.2 Bugatti entre las dos guerras
    1.3 Crisis
    1.4 Resurgimiento italiano
    1.5 Adquirida por Volkswagen

2 Competición

    2.1 Grandes Premios
    2.2 Fórmula 1
    2.3 Resistencia
    2.4 Palmarés

3 Prototipos
4 Modelos

    4.1 Actuales
    4.2 Anteriores
    4.3 Fórmula 1

5 Resultados

    5.1 Fórmula 1

6 Otras realizaciones*/