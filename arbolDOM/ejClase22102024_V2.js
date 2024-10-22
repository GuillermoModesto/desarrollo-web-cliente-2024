let i = 0;
let j = 0;

let max = 5;

let tds;

window.onload = function() {
    tds = document.getElementsByTagName("td");
    for (td of tds) {
        let aux = "ele" + String(i) + String(j);
        td.setAttribute("data-ele", aux);
        j++;
        if (j == max) {
            j = 0;
            i++;
        }
    }
    i = 0;
    j = 0;
}

let aux = "ele" + String(i) + String(j);
let conColor = document.querySelector(`td[data-ele='${aux}']`);

window.addEventListener("keydown", function(event) {

    let aux = "ele" + String(i) + String(j);
    //let conColor = document.querySelector("td[data-ele='"+aux+"']");
    let valor = `td[data-ele='${aux}']`;

    conColor = document.querySelector(valor);
    conColor.style.setProperty("background-color", "white");

    if (event.key == "ArrowLeft" && j > 0) j--;
    else if (event.key == "ArrowUp" && i > 0) i--;
    else if (event.key == "ArrowRight" && j < max - 1) j++;
    else if (event.key == "ArrowDown" && i < max - 1) i++;

    aux = "ele" + String(i) + String(j);
    //let conColor = document.querySelector("td[data-ele='"+aux+"']");
    valor = `td[data-ele='${aux}']`;

    conColor = document.querySelector(valor);
    conColor.style.setProperty("background-color", "red");

});
