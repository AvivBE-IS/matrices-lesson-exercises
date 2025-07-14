function generateMatrix(numRows, numColumns) {
  let matrix = [];
  let num = 1;

  for (let r = 0; r < numRows; r++) {
    matrix.push([]);
    for (let c = 0; c < numColumns; c++) {
      matrix[r].push(num++);
    }
  }
  return matrix;
}

class Matrix {
  constructor(rows, cols) {
    this.matrix = generateMatrix(rows, cols);
  }

  print() {
    for (let row of this.matrix) {
      console.log(row.join("\t"));
    }
  }

  get(row, col) {
    return this.matrix[row][col];
  }

  alter(row, col, val) {
    this.matrix[row][col] = val;
  }

  printColumn(col) {
    for (let r = 0; r < this.matrix.length; r++) {
      console.log(this.matrix[r][col]);
    }
  }

  printRow(row) {
    for (let c = 0; c < this.matrix[row].length; c++) {
      console.log(this.matrix[row][c]);
    }
  }
  findCoordinate(value) {
    for (let i = 0; i < this.matrix.length; i++)
      for (let j = 0; j < this.matrix[i].length; j++)
        if (this.matrix[i][j] === value) return { x: j, y: i };
  }
}

class TicTacToe extends Matrix {
  constructor() {
    super(3, 3);
    let won = 0;
    //this.matrix = this.loadBoard(3, 3);
  }
  loadBoard() {
    for (let i = 0; i < 3; i++)
      for (let j = 0; j < 3; j++) this.matrix[i][j] = ".\t";
  }
  play(rowNum, columnNum, player) {
    if (this.won === 1) return 0;
    let sign = "";
    if (player === 2) sign = `o\t`;
    else if (player === 1) sign = `X\t`;
    else console.log("Not valid palyer number- Insert only 1 or 2.");
    this.matrix[rowNum][columnNum] = sign;

    for (let j = 0; j < 3; j++) {
      if (this.matrix[rowNum][j] !== sign) break;
      console.log("Congratulations Player" + player);
      this.won = 1;
    }
    for (let i = 0; i < 3; i++) {
      if (this.matrix[i][columnNum] !== sign) return 0;
      console.log("Congratulations Player" + player);
      this.won = 1;
    }
  }
}
//let m = new Matrix(3, 4);
// m.print();
// m.alter(0, 0, m.get(1, 1));
// m.printColumn(0);
// m.printRow(0);
// let m = new Matrix(3, 4);
// console.log(m.findCoordinate(12)); //prints {x: 3, y: 2}
// console.log(m.findCoordinate(7)); //prints {x: 2, y: 1}
// let board = new TicTacToe();
// board.loadBoard();
// board.play(2, 2, 1);
// board.play(0, 0, 2);
// board.print();
let board = new TicTacToe();
board.loadBoard();

board.play(2, 2, 1);
board.play(0, 0, 2);
board.play(0, 2, 1);
board.play(1, 0, 2);
board.play(1, 2, 1); //prints Congratulations Player 1

board.print();
//prints
/* Do not remove the exports below */
module.exports = Matrix;
