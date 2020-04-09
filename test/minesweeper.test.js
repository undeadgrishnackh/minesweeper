let { Minesweeper } = require('../src/minesweeper');

function GameCreation(mockedScenario) {
  let minesweeper = new Minesweeper(mockedScenario);
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
  return minesweeper;
}

describe('Game Over Scenario 3x3', () => {
  let minesweeper = GameCreation('MockGameOver3x3');
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

describe('Safe Move Scenario 3x3', () => {
  let minesweeper = new Minesweeper('MockSafeMove3x3');
  it('Expect a Wait For The Next Move after the user ticks on cell 1;1', () => {
    minesweeper.tick(1,1);
    expect(minesweeper.getGameStatus()).toEqual('WaitForTheNextMove');
  });
  it('Expect the cell 1,1 contains 1 bomb around', () => {
    expect(minesweeper.getBoard()).toEqual(
      [
        ["X", "X", "X"],
        ["X", "1", "X"],
        ["X", "X", "X"]
      ]);
  });

  it('Expect a Wait For The Next Move after the user ticks on cell 1;0', () => {
    minesweeper.tick(1,0);
    expect(minesweeper.getGameStatus()).toEqual('WaitForTheNextMove');
  });
  it('Expect the cell 0,1 contains 1 bomb around', () => {
    expect(minesweeper.getBoard()).toEqual(
      [
        ["X", "X", "X"],
        ["1", "1", "X"],
        ["X", "X", "X"]
      ]);
  });

  it('Expect a Wait For The Next Move after the user ticks on cell 2;2', () => {
    minesweeper.tick(2,2);
    expect(minesweeper.getGameStatus()).toEqual('WaitForTheNextMove');
  });
  it('Expect the cell 2,2 contains 1 bomb around', () => {
    expect(minesweeper.getBoard()).toEqual(
      [
        ["X", "X", "X"],
        ["1", "1", "X"],
        ["X", "X", "1"]
      ]);
  });
});