const { matrix } = require('mathjs');
import GameMocks from '../mocks/Scenario.Mock';

const gamesMocks = GameMocks.GameMocks;

class Board {
  constructor(gameId) {
    if (gameId !== '' && gameId.substr(0,4) === 'Mock') {
      this.board = matrix(gamesMocks[gameId].board).clone(); // To avoid the by reference behavior is necessary cloning the MOCK or the test rerun will be broken
      this.mines  = matrix(gamesMocks[gameId].mines).clone();
    } else {
      //TODO: hte board for the moment is hardcoded waiting the first US with a real game not a MOCK!
      this.board = matrix([[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]]);
      this.mines = matrix([[null, null, null], [null, null, null], [null, null, null]]);
    }
  }

  getBoardASCII () {
    return "|" + this.board.get([0, 0]) + "|" + this.board.get([0, 1]) + "|" + this.board.get([0, 2]) + "|\n" +
      "|" + this.board.get([1, 0]) + "|" + this.board.get([1, 1]) + "|" + this.board.get([1, 2]) + "|\n" +
      "|" +this.board.get([2, 0]) + "|" + this.board.get([2, 1]) + "|" + this.board.get([2, 2]) + "|\n";
  }

  getBoard () {
    return this.board.valueOf();
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

  checkNumberOfBombsAround(x, y) {
    let bombsAround = 0;
    if (this.mines.get([x-1,y-1]) === 1) bombsAround ++;
    if (this.mines.get([x-1,y]) === 1) bombsAround ++;
    if (this.mines.get([x-1,y+1]) === 1) bombsAround ++;
    if (this.mines.get([x,y-1]) === 1) bombsAround ++;
    if (this.mines.get([x,y]) === 1) bombsAround ++;
    if (this.mines.get([x,y+1]) === 1) bombsAround ++;
    if (this.mines.get([x+1,y-1]) === 1) bombsAround ++;
    if (this.mines.get([x+1,y]) === 1) bombsAround ++;
    if (this.mines.get([x+1,y+1]) === 1) bombsAround ++;
    if (bombsAround > 0) this.board.set([x,y], bombsAround.toString());
  }
}

module.exports.Board = Board;