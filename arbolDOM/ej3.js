window.onload = function (){
    console.log("eso");
}

function aumentar(){
    let dedo = document.getElementsByTagName("div")[0];
    dedo.textContent = parseInt(dedo.textContent) + 1;
}

function disminuir(){
    let dedo = document.getElementsByTagName("div")[0];
    dedo.textContent = Number(dedo.textContent) - 1;
}