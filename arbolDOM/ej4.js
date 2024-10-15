window.onload = function(){
    console.log("hola");
}

let fotos = ["Untitled", "Untitled1", "Untitled2", "Untitled3", "Untitled4"];
let fotoExt = ".jpeg";
let pos = 0;
let max = 4;
let min = 0;

function palante(){
    let foto = document.getElementsByTagName("img")[0];
    if (pos < max) {
        pos++;
        foto.setAttribute("src", fotos[pos] + fotoExt);
    }
    checkPos();
}

function patras(){
    let foto = document.getElementsByTagName("img")[0];
    if (pos > min) {
        pos--;
        foto.setAttribute("src", fotos[pos] + fotoExt);
    }
    checkPos();
}

function checkPos(){
    if (pos == max - 2) {
        document.getElementById("avanzar").disabled = true;
        
    }
    if (pos == 1) {
        document.getElementById("retroceder").disabled = true;
    }
    if (pos > 0 && pos < max - 1){
        document.getElementById("avanzar").disabled = false;
        document.getElementById("retroceder").disabled = false;
    }
}