import { series } from './data.js';
var serieTable = document.getElementById("series");
var promedio = document.getElementById("average");
var divInformation = document.getElementById("information");
mostrarDatosSeries(series);
calcularPromedio(series);
mostrarInformacion(series);
function mostrarDatosSeries(series) {
    var seriesTbody = document.createElement("tbody");
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n            <td><a class=\"desplegador\" id=\"desplegador").concat(serie.id, "\">").concat(serie.name, "</a></td>\n            <td>").concat(serie.channel, "</td>\n            <td>").concat(serie.nSeasons, "</td>");
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
function mostrarInformacion(series) {
    var _loop_1 = function (serie) {
        var desplegador = document.getElementById("desplegador".concat(serie.id));
        desplegador.addEventListener("click", function () {
            var card = document.createElement("div");
            card.innerHTML = "<div class=\"card\" style=\"width: 18rem;\">\n                <img src=\"".concat(serie.image, "\" class=\"card-img-top\" alt=\"").concat(serie.name, "\">\n                <div class=\"card-body\">\n                  <h5 class=\"card-title\">").concat(serie.name, "</h5>\n                  <p class=\"card-text\">").concat(serie.description, "</p>\n                  <a href=\"").concat(serie.link, "\">").concat(serie.link, "</a>\n                </div>\n              </div>");
            divInformation.appendChild(card);
        });
    };
    for (var _i = 0, series_3 = series; _i < series_3.length; _i++) {
        var serie = series_3[_i];
        _loop_1(serie);
    }
}
