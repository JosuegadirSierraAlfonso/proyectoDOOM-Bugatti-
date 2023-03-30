let wsFooter = {
    showFooter(p1){
        return `
        <div class="col-sm-8 py-3" >
            <i><a href="${p1.href}" class="${p1.logo} px-3"></a></i>
            <i><a href="${p1.href1}" class="${p1.logo1} px-3"></a></i>
            <i><a href="${p1.href2}" class="${p1.logo2} px-3"></a></i>
            <i><a href="${p1.href3}" class="${p1.logo3} px-3 "></a></i>
        </div>
        `
    },
    showSubFooter(p1){
        return`
        <p>${p1.copyRigth}</p>
        <div>
            <i class="px-3">${p1.name}</i>
            <i class="px-3">${p1.name1}</i>
            <i class="px-3">${p1.name2}</i>
            <i class="px-3">${p1.name3}</i>
            <i class="px-3">${p1.name4}</i>
        </div>
        `
    },
}

self.addEventListener("message", (e)=>{
    postMessage(wsFooter[`${e.data.module}`](e.data.data));
})