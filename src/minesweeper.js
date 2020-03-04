let { Board } = require('./board');
let { GameStatus} = require('./gamestatus');

class Minesweeper {
  constructor() {
    this.board = new Board();
    this.gameStatus = new GameStatus();
  }

  getBoard () {
    return this.board.getBoard();
  }

  tick (x, y) {
    this.board.uncover(x,y);
    if( this.board.BombFounded(x,y) === "BOMB"){
      this.gameStatus.gameOver();
    }
  }

  getGameStatus(){
    return this.gameStatus.getStatus();
  }
}

module.exports.Minesweeper = Minesweeper;