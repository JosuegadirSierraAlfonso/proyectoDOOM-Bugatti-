import config from "../storage/config.js";
export default{
    
    show(){
        config.dataMyHeader();
        Object.assign(this, JSON.parse(localStorage.getItem("myHeader")))
        const ws = new Worker("storage/wsMyHeader.js", {type: "module"});
        let id = [];
        let count = 0;
        id.push("#title");
        ws.postMessage({module: "listarTitle", data: this.title});
        id.push("#company");
        ws.postMessage({module: "listarCompany", data: this.company});

        
    
        ws.addEventListener("message", (e)=>{
            let doc = new DOMParser().parseFromString(e.data, "text/html");
            document.querySelector(id[count]).append(...doc.body.children);
            (id.length-1==count) ? ws.terminate(): count++;
        })
        
    
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