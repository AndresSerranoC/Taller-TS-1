"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Data_js_1 = require("../Data.js");
document.addEventListener('DOMContentLoaded', function () {
    const seriesTableBody = document.getElementById('seriesTableBody');
    const promedioElemento = document.getElementById('promedio');
    if (seriesTableBody && promedioElemento) {
        mostrarSeries(Data_js_1.series);
        mostrarPromedio(Data_js_1.series);
    }
});
function mostrarSeries(series) {
    const seriesTableBody = document.getElementById('seriesTableBody');
    if (!seriesTableBody)
        return;
    series.forEach((serie) => {
        const row = document.createElement('tr');
        row.innerHTML = `
      <td>${serie.id}</td>
      <td>${serie.title}</td>
      <td>${serie.network}</td>
      <td>${serie.seasons}</td>
      <td>${serie.description}</td>
      <td><a href="${serie.website}" target="_blank">${serie.website}</a></td>
      <td><img src="${serie.imageUrl}" alt="${serie.title}" style="max-width: 100px; max-height: 100px;"></td>
    `;
        seriesTableBody.appendChild(row);
    });
}
function promedio(series) {
    let temporadas = 0;
    for (let index = 0; index < series.length; index++) {
        let curso = series[index];
        temporadas += curso.seasons;
    }
    temporadas = temporadas / series.length;
    return temporadas;
}
function mostrarPromedio(series) {
    const promedioElemento = document.getElementById('promedio');
    if (!promedioElemento)
        return;
    const prom = promedio(series);
    const trElement = document.createElement('tr');
    trElement.innerHTML = `<td><b>Promedio por temporada: </b></td><td>${prom}</td>`;
    promedioElemento.appendChild(trElement);
}
