export default{
    article:[
        {
            tittle: "Competition",

            subTittle: "Great prizes",
            subTittle1: "Formula 1",
            subTittle2: "Endurance",
            subTittle3: "Palmarés",


            paragraph:`Due to both its innovation and its many years of experience, Bugatti in its traditional blue19 was a highly respected
            and admired brand that rivaled the most iconic brands of the time in terms of style and sportiness. A brand that despite being French,
            was founded in an area of Alsace that was then part of Prussia, by Ettore Bugatti, of Italian descent.`,
            paragraph2:`The Bugatti Type 35 was the most successful car in racing for Bugatti and undoubtedly one of the most
            successful in the entire history of motorsport, with a total of victories exceeding a thousand
            (in its heyday, the T35, which participated in a endless races, he had an overwhelming average of 14 wins per week).
            Among these is the success in the 1926 World Championship for Manufacturers and the five consecutive victories in the Targa Florio,
            from 1925 to 1929.
            `,

            fParagraph:`Time left Bugatti out of the loop in terms of racing, but in the 1950s a last attempt was made as desperate as it was serious.
            The French brand, directed by Roland Bugatti, took over the services of Gioacchino Colombo, known for his time at Ferrari,
            and asked him to design a Bugatti to participate in Formula 1. The new car, the Type 251, had a novel type of suspensions and an
            in-line eight-cylinder engine mounted transversely behind the pilot.`,
            fParagraph1:`When the car was complete, the testing program started from early 1956 and the team convinced veteran Maurice Trintignant,
            winner of the previous year's Monaco Grand Prix with Ferrari, to contest his home race with a home team. Maurice Trintignant
            drove the Bugatti in the brand's debut at the 1956 French Grand Prix, at the Reims circuit.`,
            fParagraph2:`Ranked eighteenth (out of twenty) in qualifying practice, the car was not competitive at any time and after eighteen laps,
            an accelerator problem put it out of the race. The Type 251 project was shelved forever when Bugatti realized that they did not
            have the necessary means to make such a slow car evolve, and they preferred to withdraw from competition.`,

            eParagraph:`The Bugatti EB110 was introduced on September 15, 1991, exactly 110 years after the birth of Ettore Bugatti (hence the name) and
            initially wanted to become the car that sparked the brand's rebirth. It had a V12 engine that produced 550 horsepower
            (600 in its SuperSport version), electronic rear spoiler and spectacular scissor-style doors.`,
            eParagraph1:`Only 95 units of the original version and 31 of the SS version were manufactured (one of which belonged to the German Formula 1 driver, 
            Michael Schumacher). As for the competition, his presence was testimonial. Despite this, the EB110 is the last Bugatti to take part in a race.
            Specifically in two; the 1994 24 Hours of Le Mans and the 1996 24 Hours of Daytona.`,
            eParagraph2:`The car did not have a bad performance although it did not finish either of the two races due to technical problems. At Le Mans,
            he qualified in seventeenth position overall, fifth in GT1 with drivers like Alain Cudini, Éric Hélary and Jean-Christophe Boullion
            but they were forced to retire after 230 laps when they were fighting for the podium in their category. At Daytona two years later,
            the drivers included Derek Hill, son of Phil Hill, and Olivier Grouillard, a former Formula 1 driver. They qualified 23rd out of 76 cars,
            having to retire with gearbox problems. when they were leading their category.`,

        },
    ],
    subArticle:[
      {
        fTitle: "Great prizes",
        fTitle1: "Endurance",

        name: "Belgian Grand Prix: ",
        name1: "Gran Premio de Italia: ",
        name2: "European Grand Prix:",
        name3: "Rome Grand Prix:",

        name4: "24 Horas de Le Mans:",
        name5: "24 Horas de Spa:",
        name6: "Targa Florio:",

        title: " 1930, 1931, 1934",
        title1: "1926, 1928",
        title2: "1926, 1928, 1930",
        title3: "1925, 1926, 1927, 1928",

        title4: "1937, 1939",
        title5: "1934",
        title6: "1925, 1926, 1927, 1928, 1929",

        href: "https://es.wikipedia.org/wiki/Gran_Premio_de_B%C3%A9lgica",
        href1: "https://es.wikipedia.org/wiki/Gran_Premio_de_Italia",
        href2: "https://es.wikipedia.org/wiki/Gran_Premio_de_Europa",
        href3: "https://es.wikipedia.org/wiki/Premio_de_Roma",

        href4: "https://es.wikipedia.org/wiki/24_Horas_de_Le_Mans",
        href5: "https://es.wikipedia.org/wiki/24_Horas_de_Spa",
        href6: "https://es.wikipedia.org/wiki/Targa_Florio"
      },
    ],
    showFirstArticle(){
        this.article.forEach((val,id) => {
            document.querySelector("#firstArticle").insertAdjacentHTML("beforeend",`
            <h2 class="blog-post-title">${val.tittle}</h2>
            <p class="blog-post-meta border-bottom">January 1, 2021 by <a href="#">Mark</a></p>
            <h3 class="pb-4 mb-4 fst-italic ">${val.subTittle}</h3>
            <p>${val.paragraph}</p>
            <p>${val.paragraph2}</p>
            <h3 class="pb-4 mb-4 fst-italic ">${val.subTittle1}</h3>
            <p>${val.fParagraph}</p>
            <p>${val.fParagraph1}</p>
            <p>${val.fParagraph2}</p>
            <h3 class="pb-4 mb-4 fst-italic ">${val.subTittle2}</h3>
            <p>${val.eParagraph}</p>
            <p>${val.eParagraph1}</p>
            <p>${val.eParagraph2}</p>
            <h3 class="pb-4 mb-4 fst-italic ">${val.subTittle3}</h3>
            `);
        });
    },
    showSubFirstArticle(){
        this.subArticle.forEach((val,id) => {
            document.querySelector("#firstArticle").insertAdjacentHTML("beforeend",`
            <div class="row">
            <div class="col-12 sm-2 col-md-12 col-lg-6">
              <h5 class="pb-4 mb-4 fst-italic ">${val.fTitle}</h5>
              <ul>
                <li><a href="${val.href}">${val.name} </a> ${val.title}</li><br>
                <li><a href="${val.href1}">${val.name1}</a> ${val.title1}</li><br>
                <li><a href="${val.href2}">${val.name2}</a>${val.title2}</li><br>
                <li><a href="${val.href3}">${val.name3}</a>${val.title3}</li>
              </ul>
            </div>
            <div class="col-12 col-md-12 col-lg-6">
              <h5 class="pb-4 mb-4 fst-italic ">${val.fTitle1}</h5>
              <ul>
                <li><a href="${val.href4}">${val.name4}</a>${val.title4}</li><br>
                <li><a href="${val.href5}">${val.name5}</a>${val.title5}</li><br>
                <li><a href="${val.href6}">${val.name6}</a>${val.title6}</li>
              </ul>
            </div>
          </div>
            `);
        });
    },
}