function pedirTam(){
    let num;
    do{
        num = prompt("Número", "");
        num  = Number(num);
        if (isNaN(num)) alert ("tu padre no te quiere");
        if (num < 2) alert ("te odio");
    } while  (isNaN(num) || num < 2);
    return num;
}

function crearMatriz(n){
    let matriz = [];
    let linea = [];
    let max = n*n;
    for (let j = 0; j < max; j++){
        linea.push(Math.floor(Math.random() * ((n*2) - n + 1) + n));
        if(linea.length == n){
            matriz.push(linea);
            linea = [];
        }
    }
    return matriz;
}

function mostrarNumMayor(matriz){
    let mayor = 0;
    matriz.forEach(fil => {
        fil.forEach(num => {
            if (num > mayor) mayor = num;
        });
    });
    alert (mayor);
}

function mostrarSumaDeTodo(matriz){
    let suma = 0;
    matriz.forEach(fil => {
        fil.forEach(num => {
            suma += num;
        });
    });
    alert (suma);
}

function fizzbuzz(matriz){
    let nuevaMat = [];
    let nuevaLin = [];
    matriz.forEach(linea => {
        linea.forEach(ele => {
            if (ele % 15 == 0) nuevaLin.push("fizzbuzz");
            else if (ele % 5 == 0) nuevaLin.push("buzz");
            else if (ele % 3 == 0) nuevaLin.push("fizz");
            else nuevaLin.push(ele);
        });
        nuevaMat.push(nuevaLin);
        nuevaLin = [];
    });
    return nuevaMat;
}

function todo(){
    let tam = pedirTam();
    let matriz = crearMatriz(tam);
    mostrarNumMayor(matriz);
    let nueva = fizzbuzz(matriz);
    console.log(nueva);
} 