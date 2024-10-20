import { series } from './data.js';
var serieTable = document.getElementById("series");
var promedio = document.getElementById("average");
mostrarDatosSeries(series);
calcularPromedio(series);
function mostrarDatosSeries(series) {
    var seriesTbody = document.createElement("tbody");
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n            <td><a href=").concat(serie.link, ">").concat(serie.name, "</a></td>\n            <td>").concat(serie.channel, "</td>\n            <td>").concat(serie.nSeasons, "</td>");
        seriesTbody.appendChild(trElement);
    }
    serieTable.appendChild(seriesTbody);
}
function calcularPromedio(series) {
    var totalSeasons = 0;
    for (var _i = 0, series_2 = series; _i < series_2.length; _i++) {
        var serie = series_2[_i];
        totalSeasons += serie.nSeasons;
    }
    var prom = totalSeasons / series.length;
    promedio.innerHTML = "".concat(prom);
}
