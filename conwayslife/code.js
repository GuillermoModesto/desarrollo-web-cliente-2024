const MAX_FILAS = 100;
const ALIVE = "rgb(67, 202, 67)";
const DEAD = "rgb(189, 67, 67)";

window.onload = function() {
    let bot_iniciar = document.querySelector("button");
    bot_iniciar.onclick = function() {
        let rows = document.getElementById("rows").value;
        let board = create_board(validate(rows));
        this.disabled = true;
        give_life(rows);
    }
}

function validate(rows) {
    return rows;
}

function create_board(rows) {
    let tabla = document.createElement("table");
    //let chance = initial / (rows * 2);
    document.getElementById("game-area").appendChild(tabla);
    for (let i = 0; i < rows; i++) {
        let tr = tabla.appendChild(document.createElement("tr"));
        console.log("fila")
        for (let j = 0; j < rows; j++) {
            let td = document.createElement("td");
            td.setAttribute("id", String(i) + String(j));
            td.style.backgroundColor = DEAD;
            console.log("column")
            tr.appendChild(td);
        }
    }
    return tabla;
}

function give_life(rows) {
    let initial = document.getElementById("initial").value;
    do {
        let row = random(0, rows - 1);
        let col = random(0, rows - 1);
        let ele = document.getElementById(String(row) + String(col));
        if (ele.style.backgroundColor == DEAD) {
            initial--;
            ele.style.backgroundColor = ALIVE;
        }
    } while(initial != 0);
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}