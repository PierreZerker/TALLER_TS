
import { Serie } from './Serie.js';
import {series} from './data.js';

let serieTable:HTMLElement = document.getElementById("series")!;
let promedio:HTMLElement = document.getElementById("average")!;

mostrarDatosSeries(series);
calcularPromedio(series);

function mostrarDatosSeries(series: Serie[]):void{
    let seriesTbody:HTMLElement = document.createElement("tbody");
    for(let serie of series){
        let trElement:HTMLElement= document.createElement("tr");
        trElement.innerHTML=`<td>${serie.id}</td>
            <td><a href=${serie.link}>${serie.name}</a></td>
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
