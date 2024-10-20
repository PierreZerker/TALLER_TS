
import { Serie } from './Serie.js';
import {series} from './data.js';

let serieTable:HTMLElement = document.getElementById("series")!;
let promedio:HTMLElement = document.getElementById("average")!;
let divInformation: HTMLElement = document.getElementById("information")!;

mostrarDatosSeries(series);
calcularPromedio(series);
mostrarInformacion(series);

function mostrarDatosSeries(series: Serie[]):void{
    let seriesTbody:HTMLElement = document.createElement("tbody");
    for(let serie of series){
        let trElement:HTMLElement= document.createElement("tr");
        trElement.innerHTML=`<td>${serie.id}</td>
            <td><a class="desplegador" id="desplegador${serie.id}">${serie.name}</a></td>
            <td>${serie.channel}</td>
            <td>${serie.nSeasons}</td>`
        seriesTbody.appendChild(trElement);
    }
    serieTable.appendChild(seriesTbody);
}

function calcularPromedio(series: Serie[]):void{
    let totalSeasons:number=0;
    for(let serie of series){
        totalSeasons+=serie.nSeasons;
    }
    let prom:number=totalSeasons/series.length;
    promedio.innerHTML=`${prom}`;
}

function mostrarInformacion(series: Serie[]):void{
    for(let serie of series){
        let desplegador:HTMLElement = document.getElementById(`desplegador${serie.id}`)!;
        desplegador.addEventListener("click", function(){
            let card:HTMLElement = document.createElement("div");
            card.innerHTML=`<div class="card" style="width: 18rem;">
                <img src="${serie.image}" class="card-img-top" alt="${serie.name}">
                <div class="card-body">
                  <h5 class="card-title">${serie.name}</h5>
                  <p class="card-text">${serie.description}</p>
                  <a href="${serie.link}">${serie.link}</a>
                </div>
              </div>`
            divInformation.appendChild(card);
        })
    }
}
