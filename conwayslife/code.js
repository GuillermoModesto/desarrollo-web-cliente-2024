const MAX_FILAS = 100;
const ALIVE = "rgb(67, 202, 67)";
const DEAD = "rgb(189, 67, 67)";
let timer;

window.onload = function() {
    let board;
    let rows;
    document.querySelector("button").onclick = function() {
        let tabla1 = document.createElement("table");
        rows = document.getElementById("rows").value;
        let speed = document.getElementById("speed").value;
        board = create_board(tabla1, validate(rows));
        document.getElementById("game-area").appendChild(tabla1);
        this.disabled = true;
        give_life(board, rows);

        timer = setInterval(function() {
            check_around(board, rows);
        }, speed);
    }
    document.getElementById("stahp").onclick = function() {
        clearInterval(timer);
    }
    document.getElementById("re").onclick = function() {
        clearInterval(timer);
        resetBoard(board, rows);
        document.querySelector("button").disabled = false;
    }
}

function create_board(tabla, rows) {
    let board = [];
    for (let i = 0; i < rows; i++) {
        let tr = tabla.appendChild(document.createElement("tr"));
        let row = [];
        for (let j = 0; j < rows; j++) {
            let td = document.createElement("td");
            td.style.backgroundColor = DEAD;
            row.push(td);
            tr.appendChild(td);
        }
        board.push(row);
    }
    return board;
}

function give_life(board, rows) {
    let initial = document.getElementById("initial").value;
    do {
        let row = random(0, rows - 1);
        let col = random(0, rows - 1);
        let ele = board[row][col];
        if (ele.style.backgroundColor == DEAD) {
            initial--;
            ele.style.backgroundColor = ALIVE;
        }
    } while(initial != 0);
}

function check_around(board, rows) {
    let future = [];
    for (let i = 0; i < rows; i++) {
        let row = [];
        for (let j = 0; j < rows; j++) {
            row.push(board[i][j].style.backgroundColor);
        }
        future.push(row);
    }

    let surroundings;
    let directions = [
        [-1, -1], [-1, 0], [-1, 1],
        [ 0, -1],          [ 0, 1],
        [ 1, -1], [ 1, 0], [ 1, 1]
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
            if (surroundings < 2 || surroundings > 3) {
                future[i][j] = DEAD;
            }
            else if (surroundings == 3) {
                future[i][j] = ALIVE;
            }
        }
    }
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < rows; j++) {
            board[i][j].style.backgroundColor = future[i][j];
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