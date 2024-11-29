const MAX_FILAS = 100;
const ALIVE = "rgb(67, 202, 67)";
const DEAD = "rgb(189, 67, 67)";
let timer;

window.onload = function() {
    let board;
    let future;
    let rows;
    document.querySelector("button").onclick = function() {
        rows = document.getElementById("rows").value;
        let speed = document.getElementById("speed").value;
        board = create_board(validate(rows));
        this.disabled = true;
        give_life(rows);
        /* -- MAIN -- */
        timer = setInterval(function() {
            check_around(board, future, rows);
        }, speed);
    }
    document.getElementById("stahp").onclick = function() {
        clearInterval(timer);
        resetBoard(board, rows);
        document.querySelector("button").disabled = false;
    }
}

function create_board(rows) {
    let tabla = document.createElement("table");
    let row = [];
    let board = [];
    //let chance = initial / (rows * 2);
    document.getElementById("game-area").appendChild(tabla);
    for (let i = 0; i < rows; i++) {
        let tr = tabla.appendChild(document.createElement("tr"));
        for (let j = 0; j < rows; j++) {
            let td = document.createElement("td");
            td.setAttribute("id", String(i) + String(j));
            td.style.backgroundColor = DEAD;
            row.push(td);
            tr.appendChild(td);
        }
        board.push(row);
        row = [];
    }
    return board;
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

function check_around(board, future, rows) {
    let surroundings;
    let directions = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1],           [0, 1],
        [1, -1],  [1, 0],  [1, 1]
    ];
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < rows; j++) {
            surroundings = 0;
            for (let k = 0; k < directions.length; k++) {
                if (in_grid(i, j, k, rows, directions)) {
                    let ele = board[i + directions[k][0]][j + directions[k][1]];
                    if (ele.style.backgroundColor == ALIVE) {
                        surroundings++;
                    }
                }
            }
            let ele = board[i][j];
            if (surroundings < 2 || surroundings > 3) {
                ele.style.backgroundColor = DEAD;
            }
            else if (surroundings == 3) {
                ele.style.backgroundColor = ALIVE;
            }
        }
    }
}

function in_grid(i, j, k, rows, directions) {
    let ni = i + directions[k][0];
    let nj = j + directions[k][1];
    return (ni >= 0 && ni < rows && nj >= 0 && nj < rows);
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function validate(rows) {
    return rows;
}

function resetBoard(board, row) {
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < row; j++) {
            board[i][j].style.backgroundColor = DEAD;
        }
    }
    document.getElementById("game-area").removeChild(document.querySelector("table"));
}