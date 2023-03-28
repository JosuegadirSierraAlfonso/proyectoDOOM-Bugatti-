export default {
    table: [
        {
            title: "Prices",
            subTittle: "December 23, 2020 by ",
            titleTable: "Table of prices",
            paragraph: "Most relevant prices of the latest bugatti:",
            paragraph1: "This price list is of the latest Bugatti cars that have officially gone on sale by the company.",
            thead: [
                {
                    name: "Model",
                },
                {
                    name: "Year of production",
                },
                {
                    name: "Base price",

                }
            ],
            tbody: [
                {
                    award: "Bugatti Veyron",
                    age: "2005-2015",
                    description: "€ 1.350.000",
                },
                {
                    award: "Vision Gran Turismo",
                    age: "2015",
                    description: "$ 10.000.000",
                },
                {
                    award: "Bugatti Chiron",
                    age: "2016-2022",
                    description: "€ 2.400.000",
                },
                {
                    award: "Bugatti Divo",
                    age: "2019-presente",
                    description: "$ 5.400.00",
                },
                {
                    award: "Bugatti La Voiture Noire",
                    age: "2019",
                    description: "€ 16.100.000",
                },
            ],
        

        }

    ],
    showTableThirdArticule() {
        let template = "";
        this.table.forEach((val, id) => {
            template += `
            <h2 class="blog-post-title">${val.title}</h2>
            <p class="blog-post-meta border-bottom">${val.subTittle}<a href="#">Jacob</a></p>
            <h3>${val.titleTable}</h3>
            <p class="dark-text">${val.paragraph}</p>
         
            
            <table class="table bg-light">
              <thead>
                <tr>
                ${val.thead.map((val, id) => `
                <th>${val.name}</th>`).join("")}
                </tr>
              </thead>
              <tbody>
                <tr>
                ${val.tbody.map((val, id) => `
                <tr>
                    <td>${val.award}</td>
                    <td>${val.age}</td>
                    <td>${val.description}</td>
                </tr>
                </tr>`).join("")}
              </tbody>
            </table>
            <p>${val.paragraph1}</p> 
            `

        })
    document.querySelector('#thirdArticle').insertAdjacentHTML("beforeend", template)
    }

}
    

{/* 

<td></td>
<td></td>
<td></td>
</tr> */}


 