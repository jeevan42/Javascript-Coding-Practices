const generateRandom = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const isSafe = (board, row, col, num) => {
    for (let x = 0; x < 9; x++) {
        if (board[row][x] === num || board[x][col] === num) {
            return false;
        }
    }

    const rowStart = Math.floor(row / 3) * 3;
    const colStart = Math.floor(col / 3) * 3;

    for (let r = rowStart; r < rowStart + 3; r++) {
        for (let c = colStart; c < colStart + 3; c++) {
            if (board[r][c] === num) {
                return false;
            }
        }
    }
    return true;
};

const generateSudoku = (board, randomArray) => {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (board[row][col] === 0) {
                for (let num of randomArray) {
                    if (isSafe(board, row, col, num)) {
                        board[row][col] = num;
                        if (generateSudoku(board, randomArray)) {
                            return true;
                        }
                        board[row][col] = 0;
                    }
                }
                return false;
            }
        }
    }
    return true;
};

const createSudoku = () => {
    let sudokuBoard = Array.from({ length: 9 }, () => Array(9).fill(0));
    let randomArray = [];

    while (randomArray.length < 9) {
        let num = generateRandom(1, 9);
        if (!randomArray.includes(num)) {
            randomArray.push(num);
        }
    }

    generateSudoku(sudokuBoard, randomArray);

    return sudokuBoard;
};

console.table(createSudoku());
