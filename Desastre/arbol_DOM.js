window.onload = function() {
    let parras = document.getElementsByTagName("p");
    console.log(parras);

    let pirris = document.getElementsByName("neim");
    console.log(pirris);

    let parris = document.getElementsByClassName("clas");
    console.log(parris);

    let parres = document.getElementById("ide");
    console.log(parres);
}

function crece(){
    let dedo = document.getElementsByTagName("table")[0];
    dedo.setAttribute("width", Number(dedo.getAttribute("width")) + 50);
    dedo.setAttribute("height", Number(dedo.getAttribute("height")) + 50);
}

function flacido(){
    let dedo = document.getElementsByTagName("table")[0];
    dedo.setAttribute("width", Number(dedo.getAttribute("width")) - 50);
    dedo.setAttribute("height", Number(dedo.getAttribute("height")) - 50);
}
