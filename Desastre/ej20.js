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

function putElements(map, mineAmount){
    let fils = map.length
    let cols = map[0].length
    let elements = [];
    let elePos;
    let posX = 0;
    let posY = 0;
    let hasTreasure = false;
    do{
        elePos = [];
        posX = Math.floor(Math.random() * (fils + 1));
        posY = Math.floor(Math.random() * (cols + 1));
        elePos.push(posX, posY);
        if(!elements.includes(elePos)) elements.push(elePos);
    } while (elements.length < mineAmount);
    
    do{
        elePos = [];
        posX = Math.floor(Math.random() * (fils + 1));
        posY = Math.floor(Math.random() * (cols + 1));
        elePos.push(posX, posY);
        if(!elements.includes(elePos)){
            elements.push(elePos);
            hasTreasure = true;
        }
    } while (!hasTreasure);
    return elements;
}

function showElements(elements){
    let visual = "";
    elements.forEach(fil => {
        fil.forEach(ele => {
            visual += ele + " ";
        });
        visual += "\n";
    });
    alert(visual);
}

function askCoord(map){
    let posX = 0;
    let posY = 0;
    let coord = [];
    do{
        posX = prompt("Posición de fila entre 1 y " + (map.length), "");
        if(posX > map.length) alert ("Te pasaste");
        else if(posX <= 0) alert ("Tu eres tonto");
    } while (posX > map.length || posX <= 0);
    posX--;

    do{
        posY = prompt("Posición de columna entre 1 y " + (map[0].length), "");
        if(posY > map[0].length) alert ("Te pasaste");
        else if(posY <= 0) alert ("Tu eres tonto");
    } while (posY > map[0].length || posY <= 0);
    posY--;
    coord.push(posX, posY);
    return coord;
}

function todo(){
    let n = 4;
    let m = 5;
    let mineCount = 3;
    let map = makeMap(n, m);
    let elements = putElements(map, mineCount);
    showElements(elements);
    let treasure = elements.pop();
    let coord = askCoord(map);
    
    
}