const numRows = 25;
const numCols = 25;
let timer = null;
let tableArray = [];

//making checkerboard starting table
let makeStartTable = () => {
    let boardContainer = document.getElementById("board-container");
    let gameTable = document.createElement("table");
    gameTable.setAttribute("id", "main-table");

    for (let i = 0; i < numRows; i++) {
        let t_row = document.createElement("tr");
        tableArray.push([]);
        for (let j = 0; j < numCols; j++) {
            let t_col = document.createElement("td");
            if ((i % 2 === 0 && j % 2 === 0) || (i % 2 === 1 && j % 2 === 1)) {
                tableArray[i].push(true);
                t_col.setAttribute("id", "alive");
            } else if (!((i % 2 === 0 && j % 2 === 0) || (i % 2 === 1 && j % 2 === 1))) {
                tableArray[i].push(false);
                t_col.setAttribute("id", "dead");
            }
            t_row.append(t_col);
        }
        gameTable.append(t_row);
    }
    boardContainer.append(gameTable);
}


const initButtons = () => {
    const stepBtn = document.getElementById("step-button");
    stepBtn.addEventListener("click", step);

    const resetBtn = document.getElementById("reset-button");
    resetBtn.addEventListener("click", reset);

    const goBtn = document.getElementById("go-button");
    goBtn.addEventListener("click", go);

    const pauseBtn = document.getElementById("pause-button");
    pauseBtn.addEventListener("click", pause);

    const randomBtn = document.getElementById("random-button");
    randomBtn.addEventListener("click", random);
}

const step = () => {
    tableArray = stepBoard(tableArray);
    let gameTable = document.getElementById("main-table");
    for (let i = 0; i < numRows; i++) {
        let t_row = gameTable.rows[i];
        for (let j = 0; j < numCols; j++) {
            let t_col = t_row.cells[j];
            if (tableArray[i][j] === true) {
                tableArray[i][j] = true;
                t_col.setAttribute("id", "alive");
            }
            else if (tableArray[i][j] === false) {
                tableArray[i][j] = false;
                t_col.setAttribute("id", "dead");
            }
        }
    }
}

const reset = () => {
    pause();
    let gameTable = document.getElementById("main-table");
    for (let i = 0; i < numRows; i++) {
        let t_row = gameTable.rows[i];
        for (let j = 0; j < numCols; j++) {
            let t_col = t_row.cells[j];
            if ((i % 2 === 0 && j % 2 === 0) || (i % 2 === 1 && j % 2 === 1)) {
                tableArray[i][j] = true;
                t_col.setAttribute("id", "alive");
            }
            if (!((i % 2 === 0 && j % 2 === 0) || (i % 2 === 1 && j % 2 === 1))) {
                tableArray[i][j] = false;
                t_col.setAttribute("id", "dead");
            }
        }
    }
}

const go = () => {
    timer = setInterval(step, 100);
}

const pause = () => {
    clearInterval(timer)
}

const random = () => {
    pause();
    let gameTable = document.getElementById("main-table");
    for (let i = 0; i < numRows; i++) {
        let t_row = gameTable.rows[i];
        for (let j = 0; j < numCols; j++) {
            let t_col = t_row.cells[j];
            let rnum = Math.round(Math.random());
            if (rnum === 1) {
                tableArray[i][j] = true;
                t_col.setAttribute("id", "alive")
            }
            else if (rnum === 0) {
                tableArray[i][j] = false;
                t_col.setAttribute("id", "dead")
            }
        }
    }
}

makeStartTable();
initButtons();