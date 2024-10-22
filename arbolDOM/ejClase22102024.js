let i = 0;
let j = 0;

let max = 5;

window.onload = function() {
    console.log("hola");
}

/*
let mapa = [
    [1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
];
*/

let tds = document.getElementsByTagName("td");
let conColor = tds[(i*max) + j];
conColor.style.setProperty("background-color", "red");

window.addEventListener("keydown", function(event) {
/*
    // Evitar repetir eventos ya procesados
    if (event.defaultPrevented) {
        return;
    }
*/
    if (event.key == "ArrowLeft" && j > 0) j--;
    else if (event.key == "ArrowUp" && i > 0) i--;
    else if (event.key == "ArrowRight" && j < max - 1) j++;
    else if (event.key == "ArrowDown" && i < max - 1) i++;

    conColor.style.setProperty("background-color", "white");
    conColor = tds[(i*max) + j];
    conColor.style.setProperty("background-color", "red");

/*
    // Prevenir usar dos veces la acción por defecto
    event.preventDefault();
*/
}/*, true*/); // Esto hace que el evento vaya primero al listener y luego a la pantalla