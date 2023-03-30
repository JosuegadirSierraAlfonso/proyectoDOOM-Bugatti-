import config from "../storage/config.js";
export default{
    



    showAside(){
        config.dataMyAside();
        Object.assign(this, JSON.parse(localStorage.getItem("myAside")));
        const ws5 = new Worker("storage/wsMyAside.js", {type:"module"});
        ws5.postMessage({module: "showAside", data: this.nav});
        ws5.addEventListener("message", (e)=>{
            let doc5 = new DOMParser().parseFromString(e.data, "text/html");
            document.querySelector("#nav").append(...doc5.body.children);
            ws5.terminate() 
        })

    },
    

}
/*
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





const data = this.nav.map((val,id) => {
            return (
                (val.link)
                    ? this.list(val)
                    : this.cards(val)
            );
        });
        document.querySelector("#nav").insertAdjacentHTML("beforeend",data.join("<br>"))




*/