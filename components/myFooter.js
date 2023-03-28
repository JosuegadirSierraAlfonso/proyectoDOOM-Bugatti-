export default{
    logos: [{
        logo: "fab fa-facebook-f",
        href: "https://www.facebook.com/bugatti/",

        logo1: "fab fa-twitter",
        href1: "https://twitter.com/Bugatti",

        logo2: "fab fa-instagram",
        href2: "https://www.instagram.com/bugatti/",

        logo3: "fab fa-pinterest",
        href3: "https://www.pinterest.de/bugatti/",
    }],
    ref: [
        {
        copyRigth: "&copy; 2023 BUGATTI AUTOMOBILES S.A.S",
        name: "CONTACT",
        name1: "CAREER",
        name2: "MEDIA",
        name3: "LEGAL NOTICE",
        name4: "CODE OF CONDUCT",
    },
],
    showFooter(){
        this.logos.forEach((val,id) => {
            document.querySelector("#foot").insertAdjacentHTML("beforeend",`
            <div class="col-sm-8 py-3" >
                <i><a href="${val.href}" class="${val.logo} px-3"></a></i>
                <i><a href="${val.href1}" class="${val.logo1} px-3"></a></i>
                <i><a href="${val.href2}" class="${val.logo2} px-3"></a></i>
                <i><a href="${val.href3}" class="${val.logo3} px-3 "></a></i>
            </div>
            `);
        });
    },
    showSubFooter(){
        this.ref.forEach((val,id) => {
            document.querySelector("#foot").insertAdjacentHTML("beforeend",`
            <p>${val.copyRigth}</p>
            <div>
                <i class="px-3">${val.name}</i>
                <i class="px-3">${val.name1}</i>
                <i class="px-3">${val.name2}</i>
                <i class="px-3">${val.name3}</i>
                <i class="px-3">${val.name4}</i>
            </div>
            `);
        });
    },
}