export default{
    image:"img/bugatti-voiture-noire-3.webp",
    titulo: "Bugatti",
    paragrapth: "Bugatti is a French luxury and competition automobile brand founded in 1909 by Ettore Bugatti (1881-1947) in Molsheim.1 It is currently owned by the Volkswagen Group.",
    btn:{
        name: "Continue........",
        href: "https://es.wikipedia.org/wiki/Bugatti"
    },
    showImage(){
        document.querySelector(".img-bugatti").style.backgroundImage = `url(${this.image})`;
    },
    showSectionBanner(){
        document.querySelector("#banner").
        insertAdjacentHTML("beforeend",`
        <h1 class="display-4 fst-italic text-with text-center">${this.titulo}</h1>
        <p class="lead text-white text-center">${this.paragrapth}</p>
        <p class="lead mb-0"><a href="${this.btn.href}" class="text-white fw-bold">${this.btn.name}</a></p>`)
    }


}
