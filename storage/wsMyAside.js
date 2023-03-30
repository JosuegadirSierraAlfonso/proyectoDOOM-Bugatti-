let wsMyAside = {
    showAside(p2){
        const data = p2.map((val, id)=>{
            if(val.title){
                return this.cards(val);
            }else{
                return this.list(val);
            }
        })  
        return data.join("<br>")
    },
    cards(p1){
       return `
       <div class="p-4 mb-3 news">
            <h4 class="fst-italic">${p1.title}</h4>
        </div>
        `
        },
    
    list(p1){
        return `
        <div class="card text-white">
            <div class="card-body">
              <h5 class="card-title">${p1.tittle}</h5>
              <div class="mb-1 text-danger">${p1.subTitle}</div>
              <p class="card-text">${p1.paragraph}</p>
              ${p1.link.map((val, id) =>  `<a href="${val.href}" class="btn btn-dark">${val.name}</a>`).join("")}
            </div>
        </div>

        `;
    }
}

self.addEventListener("message", (e)=>{
    postMessage(wsMyAside[`${e.data.module}`](e.data.data));
})