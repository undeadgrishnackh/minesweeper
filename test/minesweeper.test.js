let { Minesweeper } = require('../src/minesweeper');

describe('Game Over Scenario 3x3', () => {
  let minesweeper = new Minesweeper();

  it('Expect the board is created, empty and properly rendered in ASCII.', () => {
    expect(minesweeper.getBoardASCII()).toEqual('' +
      '|X|X|X|\n' +
      '|X|X|X|\n' +
      '|X|X|X|\n');
  });

  it('Expect the board is created and an empty matrix', () => {
    expect(minesweeper.getBoard()).toEqual(
      [
      ["X", "X", "X"],
      ["X", "X", "X"],
      ["X", "X", "X"]
      ])
  });

  it('Expect the game is waiting for a move', () => {
    expect(minesweeper.getGameStatus()).toEqual('WaitForTheNextMove');
  });

  it('Expect a game over after the user ticks on cell 1;1', () => {
    minesweeper.tick(1,1);
    expect(minesweeper.getGameStatus()).toEqual('GameOver');
  });

  it('Expect the board shows the bomb location, in ASCII', function () {
    expect(minesweeper.getBoardASCII()).toEqual('' +
      '|X|X|X|\n' +
      '|X|B|X|\n' +
      '|X|X|X|\n');
  });

  it('Expect the board shows the bomb location, in JSON', () => {
    expect(minesweeper.getBoard()).toEqual(
      [
        ["X", "X", "X"],
        ["X", "B", "X"],
        ["X", "X", "X"]
      ])
  });
});