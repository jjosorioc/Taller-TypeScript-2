import { Serie } from "./serie.js";
import * as dataObject from "./data.js";

// Variables
var datosSeries = dataObject.series;

let bodyTablaTV: HTMLElement = document.getElementById("bodyTablaTV")!;

let divCard: HTMLElement = document.getElementById("divCard")!;








// Funciones


/**
 * Función para mostrar la información de las series.
 * @param data 
 * @param body 
 */
function mostrarDatos(data: Serie[], body: HTMLElement): void {
    let htmlVar = "";
    let promedio = 0;
    for (let i = 0; i < data.length; i++) {
        htmlVar += `
        <tr class=\"serie\">
            <th scope=\"row\">${data[i].id}</th>
            <td>${data[i].name}</td>
            <td>${data[i].channel}</td>
            <td>${data[i].seasons}</td>
        </tr>`
        promedio += data[i].seasons;
    }
    htmlVar += `
    <tr id = \"promedio\"><h3>Seasons Average: ${promedio / data.length}</h3></tr>`;
    body.innerHTML = htmlVar;
}

// Se llama la función para agregar al html
mostrarDatos(datosSeries, bodyTablaTV);



// Event listeners

let listaClassSerie: HTMLCollectionOf<Element> = document.getElementsByClassName("serie")!;

for (let i = 0; i < listaClassSerie.length; i++) {


    listaClassSerie[i].addEventListener("click", () => {
        showCard(i);
    });
}



/**
 * 
 * @param index 
 */
function showCard(index: number): void {
    divCard.innerHTML = "";


    let currentSerie: Serie = datosSeries[index];

    let card: string = `
    <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${currentSerie.imgLink}" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">${currentSerie.name}</h5>
            <p class="card-text">${currentSerie.info}</p>
            <a href="${currentSerie.pagina}" class="btn btn-primary">Página de la serie</a>
        </div>
    </div>
    `;
    //divCard.appendChild(card);
    divCard.innerHTML = card;
}