let { Board } = require('./board');
let { GameStatus} = require('./gamestatus');

class Minesweeper {
  constructor(gameId) {
    this.board = new Board(gameId);
    this.gameStatus = new GameStatus();
  }

  getBoardASCII () {
    return this.board.getBoardASCII();
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