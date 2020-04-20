let { Board } = require('./board');
let { GameStatus} = require('./gamestatus');

class Minesweeper {
  constructor(gameId) {
    this.gameId = gameId;
    this.gameStatus = new GameStatus();
    this.board = new Board(gameId, this.gameStatus);
  }

  getBoardASCII () {
    return this.board.getBoardASCII();
  }

  getMinesASCII(){
    return this.board.getMinesASCII();
  }

  getBoard () {
    return this.board.getBoard();
  }

  tick (row, col) {
    this.board.uncover(row,col);
    if (this.board.isHereABomb(row,col)) return('GameOver');
    this.board.checkNumberOfBombsAround(row,col);
  }

  getGameStatus(){
    return this.gameStatus.getStatus();
  }

  getHTTPGameStatus(){
    return this.gameStatus.getHTTPCode();
  }

  getGameId(){
    return this.gameId;
  }
}

module.exports.Minesweeper = Minesweeper;