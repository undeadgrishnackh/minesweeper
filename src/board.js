const { matrix } = require('mathjs');

class Board {
  constructor() {
    this.board = matrix([["X", "X", "X"],["X", "X", "X"],["X", "X", "X"]]);

    this.mines = matrix([[0, 0, 0],[0, 1, 0],[0, 0, 0]]);

  }

  getBoard () {
    return "|" + this.board.get([0, 0]) + "|" + this.board.get([0, 1]) + "|" + this.board.get([0, 2]) + "|\n" +
      "|" + this.board.get([1, 0]) + "|" + this.board.get([1, 1]) + "|" + this.board.get([1, 2]) + "|\n" +
      "|" +this.board.get([2, 0]) + "|" + this.board.get([2, 1]) + "|" + this.board.get([2, 2]) + "|\n";
  }

  uncover(x, y) {
    if (this.board.get([x, y]) === 'X') {
      this.board.set([x, y],' ');
    }
  }

  BombFounded(x, y) {
    if (this.mines.get([x, y]) === 1) {
      this.board.set([x, y],'B');
      return "BOMB";
    }
    return "SAFE";
  }
}

module.exports.Board = Board;