/*
1. Matriz aleatoria NxN (n = aleatorio entre 1 y 10)
2. Funcion que recibe una matriz y devuelve true si algún elemento está repetido.

3. Anagrama -> palabra que sale al reordenar las letras de otra palabra (amor / roma / mora)
4. Función que recibe dos cadenas y devuelve si son anagrama o no.
*/

function crearMatriz(){
    let n = Math.floor(Math.random * 10 + 1);
    let map = [];
    let newFil = [];
    let surface = n * n;

    for (let i = 0; i < surface; i++){
        newFil.push(Math.floor(Math.random * 10 + 1));
        if (newFil.length == n){
            map.push(newFil);
            newFil = [];
        }
    }
    return map;
}

function eleRepe(matriz){
    /*
    No está mal, pero de la otra manera es mejor
    let i = 0;
    let j = 0;
     while(i < matriz.length && j != matriz[i].length){
        while(j < matriz[i].length && matriz[i] != matriz[i][j]){
            j++;
        }
        i++;
     }
     return (j != matriz[i].length);
     */

     let nums = [];
     matriz.forEach(fila => {
        fila.forEach(ele => {
            if (nums.includes(ele)) return true;
            nums.push(ele);
        })
     });
     return false;
}

function esAnagrama(pal1, pal2){
    if (pal1.length != pal2.length) return false;

    let i = 0;
    let j = 0;

    while (i < pal1.length && j != pal2.length){
        j = 0;
        while (j < pal2.length && pal1[i] != pal2[j]){
            j++;
        }
        i++;
    }

    return (j != pal2.length);
}

function todo(){
    console.log(esAnagrama("qqqa", "aaaq"));
}