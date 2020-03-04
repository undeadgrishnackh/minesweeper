let { Minesweeper } = require('../src/minesweeper');

describe('Game Over Scenario 3x3', () => {
  let minesweeper = new Minesweeper();

  it('Expect the empty board is created.', () => {
    expect(minesweeper.getBoard()).toEqual('|X|X|X|\n' +
      '|X|X|X|\n' +
      '|X|X|X|\n');
  });

  it('Expect the game is waiting for a move', () => {
    expect(minesweeper.getGameStatus()).toEqual('WaitForTheNextMove');
  });

  it('Expect a game over after the user ticks on cell 1;1', () => {
    minesweeper.tick(1,1);
    expect(minesweeper.getGameStatus()).toEqual('GameOver');
  });
});