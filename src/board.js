const { matrix } = require('mathjs');
import GameMocks from '../mocks/Scenario.Mock';

const gamesMocks = GameMocks.GameMocks;

class Board {
  constructor(gameId, gameStatus) {
    this.gameStatus = gameStatus;
    if (gameId !== '' && gameId.substr(0,4) === 'Mock') {
      this.board = matrix(gamesMocks[gameId].board).clone(); // To avoid the by reference behavior is necessary cloning the MOCK or the test rerun will be broken
      this.mines  = matrix(gamesMocks[gameId].mines).clone();
    } else {
      //TODO: hte board for the moment is hardcoded waiting the first US with a real game not a MOCK!
      this.board = matrix([[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]]);
      this.mines = matrix([[null, null, null], [null, null, null], [null, null, null]]);
    }
  }

  getBoardASCII() {
    return "" +
      "|" + this.board.get([0, 0]) + "|" + this.board.get([0, 1]) + "|" + this.board.get([0, 2]) + "|\n" +
      "|" + this.board.get([1, 0]) + "|" + this.board.get([1, 1]) + "|" + this.board.get([1, 2]) + "|\n" +
      "|" + this.board.get([2, 0]) + "|" + this.board.get([2, 1]) + "|" + this.board.get([2, 2]) + "|\n";
  }

  getMinesASCII() {
    return "" +
      "|" + this.mines.get([0, 0]) + "|" + this.mines.get([0, 1]) + "|" + this.mines.get([0, 2]) + "|\n" +
      "|" + this.mines.get([1, 0]) + "|" + this.mines.get([1, 1]) + "|" + this.mines.get([1, 2]) + "|\n" +
      "|" + this.mines.get([2, 0]) + "|" + this.mines.get([2, 1]) + "|" + this.mines.get([2, 2]) + "|\n";
  }

  getBoard () {
    return this.board.valueOf();
  }

  uncover(row, col) {
    if (this.board.get([row, col]) === 'X') {
      this.board.set([row, col],' ');
    }
  }

  isHereABomb(row, col) {
    if (this.mines.get([row, col]) === 1) {
      this.board.set([row, col],'B');
      this.gameStatus.setGameIsOver();
      return true;
    }
    return false;
  }

  checkNumberOfBombsAround(row, col) {
    let bombsAround = 0;
    if (this.isThereABombInTheTile([row-1,col-1])) bombsAround ++;
    if (this.isThereABombInTheTile([row-1,col])) bombsAround ++;
    if (this.isThereABombInTheTile([row-1,col+1])) bombsAround ++;
    if (this.isThereABombInTheTile([row,col-1])) bombsAround ++;
    if (this.isThereABombInTheTile([row,col])) bombsAround ++;
    if (this.isThereABombInTheTile([row,col+1])) bombsAround ++;
    if (this.isThereABombInTheTile([row+1,col-1])) bombsAround ++;
    if (this.isThereABombInTheTile([row+1,col])) bombsAround ++;
    if (this.isThereABombInTheTile([row+1,col+1])) bombsAround ++;
    if (bombsAround > 0) this.board.set([row,col], bombsAround.toString());
  }

  isThereABombInTheTile([row, col]) {
    if (this.isTheTileOutOfTheBoard(row, col)) return false;
    return this.mines.get([row, col]) === 1;
  }

  isTheTileOutOfTheBoard(row, col) {
    let numberOfRows    = this.mines.size()[0];
    let numberOfColumns = this.mines.size()[1];
    return !(row >= 0 && row < numberOfRows && col >= 0 && col < numberOfColumns);
  }
}

module.exports.Board = Board;