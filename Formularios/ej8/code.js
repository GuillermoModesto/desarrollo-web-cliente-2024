/*
Coloca un div que ocupe toda la pantalla, que tenga una altura de 200px y un color
de fondo (el que quieras). Crea un programa que permita cambiar el color de ese DIV
por otros usando:
a) Indicando el color deseado entre alguna de las opciones de un bloque de botones
radio (al menos 3 colores para elegir).
b) Indicando el color deseado entre los elementos de una lista desplegable (al menos 3
colores para elegir).
*/

window.onload = function() {
    let select = document.querySelector("select");
    let radio = document.querySelector("input");
    let div = document.querySelector("div");
    let i = 0;
    let timer = setInterval(function() {
        if (i % 2 == 0)
            div.style.backgroundColor = select.value;
        else
            div.style.backgroundColor = radio.value;
        i++;
    },500);
}