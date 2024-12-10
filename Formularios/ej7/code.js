/*
Crea un textarea y un botón llamado Publicar. Cada vez que se pulse el botón
Publicar, se va a crear un div cuyo contenido será el texto del textarea. Nota: maqueta de
manera vistosa los DIV creados.
b) Haz que sólo se publiquen en el div los 50 primeros caracteres escritos en el textarea.
c) Limita a que sólo se puedan escribir 100 caracteres en el textarea. Después de los 100
caracteres escritos, no se puede seguir escribiendo. El botón Publicar no debe cambiar
su comportamiento. Nota: busca el evento adecuado para este ejercicio.
*/

window.onload = function() {
    document.querySelector("input").addEventListener("click", function() {
        let textArea = document.querySelector("textarea");
        let newDiv = document.createElement("div");
        let text = document.createTextNode(textArea.value.substring(0, 50));
        newDiv.appendChild(text);
        document.body.appendChild(newDiv);
    });
}