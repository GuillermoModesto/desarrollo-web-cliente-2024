/*
Crea un script que pida al usuario un numero entero positivo N mayor a 2.
Hay que controlar que el numero introducido sea correcto. Si no es así se volverá a
pedir.
A continuación debe crearse una matriz NxN rellena con los resultados de la tabla de
multiplicar de N (empezando en 1). Finalmente, muestra por consola la matriz “en
forma de matriz”
Ej: Para el número 3, el programa debe mostrar
03 06 09
12 15 18
21 24 27
*/

function pedirNumero(){
    let number;
    do {
        number = prompt("Número mayor a 2", "");
    } while (number <= 2);
    return number;
}

function crearMatriz(n){
    let matriz = [];
    let linea = [];
    let max = n*n;
    for (let j = 0; j < max; j++){
        linea.push(n * (j+1));
        if(linea.length == n){
            matriz.push(linea);
            linea = [];
        }
    }
    return matriz;
}

function crearInversa(matriz){
    let inversa = [];
    for (let i = 0; i < matriz.length; i++){
        matriz.forEach((ele) => {
            inversa.push(ele[i]);
        });
    }
    return inversa;
}

function todo(){
    let number = pedirNumero();
    let matriz = crearMatriz(number);
    let inversa = crearInversa(matriz);
    console.log(matriz);
    console.log(inversa);
}