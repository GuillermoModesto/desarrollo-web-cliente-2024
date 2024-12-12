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
    let radios = document.getElementsByTagName("input");
    let div = document.querySelector("div");
    select.addEventListener("change", function() {
        div.style.backgroundColor = this.value;
    });
    for (let i = 0; i < radios.length; i++) {
        radios[i].addEventListener("change", function() {
            if (this.checked)
                div.style.backgroundColor = this.value;
        });
    }
}