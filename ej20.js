/*
Crea un script que simule el siguiente juego:
En un tablero, NxM la maquina colocará de forma aleatoria varias minas y un tesoro. El
usuario intentará averiguar la posición del tesoro indicando la posición del tablero que
quiere mirar. Podrá seguir jugando mientras no encuentre una de las minas (muere) o el
tesoro (gana).
Para este ejercicio usa un tablero de 4x5 con 3 minas.
Hay que asegurarse que tanto las minas como el tesoro no se colocan en posiciones ya
ocupadas.
En cada iteración del juego se pintará el tablero y se preguntará al usuario qué
coordenadas quiere mostrar del tablero.
Usa la consola para pintar el tablero de la siguiente forma:
• Si una coordenada aún no ha sido visitada, pinta un *
• Si una coordenada ha sido visitada y no tiene nada, pinta un _
• Si una coordenada ha sido visitada y tiene una mina, pinta una X (y mata al
jugador)
• Si una coordenada ha sido visitada y tiene el tesoro, pinta un € (y el jugador
gana)
Puedes pedir al usuario las coordenadas como quieras: ambos valores de golpe o de uno
en uno. Lo único a tener en cuenta es que, para el usuario, las coordenadas empiezan en
1, no en 0.
Mejora: si hay una mina a una casilla de distancia de la posición que ha descubierto el
usuario, muestra un aviso indicando que tenga cuidado (pero no reveles la posición de la
mina).
*/

function pedirNum(mensaje){
    let n = 0;

    do{
        n = prompt(mensaje, "");
        n = Number(n);
        if (isNaN(n)) alert("Solo números");
    } while (isNaN(n));

    return n;
}

function makeMap(fil, col){
    let map = [];
    let newFil = [];
    let surface = fil * col;

    for (let i = 0; i < surface; i++){
        newFil.push("*");
        if (newFil.length == fil){
            map.push(newFil);
            newFil = [];
        }
    }
    return map;
}

function showMap(map){
    let visualMap = "";
    map.forEach(fil => {
        fil.forEach(ele => {
            visualMap += ele + " ";
        });
        visualMap += "\n";
    });
    alert(visualMap);
}

function todo(){
    let n = 4;
    let m = 5;
    let mineCount = 3;
    let map = makeMap(n, m);
    showMap(map);
}