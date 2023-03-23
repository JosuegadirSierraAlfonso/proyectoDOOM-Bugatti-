export default{
    image:"img/bugatti-voiture-noire-3.webp",
    titulo: "Bugatti",
    paragrapth: "Bugatti es una marca francesa de automóviles de gran lujo y competencia fundada en el año 1909 por Ettore Bugatti (1881-1947) en Molsheim.1​ En la actualidad es propiedad de Grupo Volkswagen.",
    btn:{
        name: "Continuar........",
        href: "https://es.wikipedia.org/wiki/Bugatti#Ettore_Bugatti"
    },
    showImage(){
        document.querySelector(".img-bugatti").style.backgroundImage = `url(${this.image})`;
    },
    showSectionBanner(){
        document.querySelector("#banner").
        insertAdjacentHTML("beforeend",`
        <h1 class="display-4 fst-italic">${this.titulo}</h1>
        <p class="lead my-3 text-white">${this.paragrapth}</p>
        <p class="lead mb-0"><a href="${this.btn.href}" class="text-white fw-bold">${this.btn.name}</a></p>`)
    }


}
