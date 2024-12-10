/*
Crea un formulario con varios elementos checkbox (pej, países) y una lista desplegable
vacía.
Implementa el código necesario para que, cada vez que se marque un checkbox, se cree
una entrada nueva en la lista desplegable con el país correspondiente. Si se desmarca un
checkbox, debe eliminarse el país correspondiente de la lista.
*/

window.onload = function() {
    let formu = document.forms[0];
    let inpt = formu.querySelectorAll("input[type='checkbox']");
    let sele = formu.elements["cositas"];

    inpt.forEach((ele) => {
        ele.addEventListener("change", function() {
            if (ele.checked) {
                let nuevo = document.createElement("option");
                nuevo.value = ele.value;
                nuevo.appendChild(document.createTextNode(String(ele.value)));
                sele.appendChild(nuevo);
            }
            else {
                sele.removeChild(document.querySelector(`option[value='${ele.value}']`));
            }
        });
    });
}