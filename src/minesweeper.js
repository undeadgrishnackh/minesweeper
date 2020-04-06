let { Board } = require('./board');
let { GameStatus} = require('./gamestatus');

class Minesweeper {
  constructor(gameId) {
    this.gameStatus = new GameStatus();
    this.board = new Board(gameId, this.gameStatus);
  }

  getBoardASCII () {
    return this.board.getBoardASCII();
  }

  getBoard () {
    return this.board.getBoard();
  }

  tick (x, y) {
    this.board.uncover(x,y);
    if (this.board.isHereABomb(x,y)) return('GameOver');
    this.board.checkNumberOfBombsAround(x,y);
  }

  getGameStatus(){
    return this.gameStatus.getStatus();
  }

  getHTTPGameStatus(){
    return this.gameStatus.getHTTPCode();
  }
}

module.exports.Minesweeper = Minesweeper;