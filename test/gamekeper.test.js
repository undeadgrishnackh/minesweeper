let { GameKeeper } = require('../src/gamekeeper');
let { Minesweeper } = require('../src/minesweeper');

let gameKeeper = undefined;

describe('Basic CRUD operations for the in-memory gamekeeper archive', () => {
  beforeAll(() => {
    gameKeeper = undefined;
    gameKeeper = new GameKeeper();
    gameKeeper.clearDatabase();
  });
  it('Expect the GameKeeper is alive', () => {
    expect(gameKeeper.size()).toEqual(0);
  });
  it('Expect the MOCKed game is created and stored by the gamekeeper.', () => {
    let minesweeper = new Minesweeper('MockGameKeeperArchive');
    expect(minesweeper.getGameStatus()).toEqual('WaitForTheNextMove');

    gameKeeper.storeGame(minesweeper);
    expect(gameKeeper.size()).toEqual(1);
  });
  it('Expect the gamekeeper loads the Mock from the archive and it is as the original.', () => {
    let minesweeper = undefined;
    expect(minesweeper).toBeUndefined;

    minesweeper = gameKeeper.loadGame('MockGameKeeperArchive');
    expect(minesweeper.getBoardASCII()).toEqual('' +
      '|R0C0|R0C1|R0C2|\n' +
      '|R1C0|R1C1|R1C2|\n' +
      '|R2C0|R2C1|R2C2|\n');
    expect(minesweeper.getGameStatus()).toEqual('WaitForTheNextMove');
    expect(minesweeper.getMinesASCII()).toEqual('' +
      '|1|2|3|\n' +
      '|4|5|6|\n' +
      '|7|8|9|\n');
  });
  it('Expect a Game Over after ticking 0,0.', () => {
    let minesweeper = undefined;
    expect(minesweeper).toBeUndefined;
    minesweeper = gameKeeper.loadGame('MockGameKeeperArchive');
    minesweeper.tick(0,0);
    expect(minesweeper.getGameStatus()).toEqual('GameOver');
  });
  it('Expect the game is updated into the game keeper\'s storage as a game over status.', () => {
    let minesweeper = undefined;
    expect(minesweeper).toBeUndefined;
    minesweeper = gameKeeper.loadGame('MockGameKeeperArchive');
    minesweeper.tick(0,0);
    expect(minesweeper.getGameStatus()).toEqual('GameOver');
    gameKeeper.updateGame(minesweeper);

    let minesweeperUpdated = gameKeeper.loadGame('MockGameKeeperArchive');
    expect(minesweeperUpdated.getGameStatus()).toEqual('GameOver');
    expect(minesweeperUpdated.getBoardASCII()).toEqual('' +
      '|B|R0C1|R0C2|\n' +
      '|R1C0|R1C1|R1C2|\n' +
      '|R2C0|R2C1|R2C2|\n');
    expect(minesweeperUpdated.getMinesASCII()).toEqual('' +
      '|1|2|3|\n' +
      '|4|5|6|\n' +
      '|7|8|9|\n');
  });
  it('Expect the game is deleted.', () => {
    
  });
});

describe('Multiple games storage scenario', () => {
  beforeAll(() => {
    gameKeeper = undefined;
    gameKeeper = new GameKeeper();
    gameKeeper.clearDatabase();
  });
  it('Create and store game A', () => {
    let minesweeperA = new Minesweeper('MockGameKeeperArchive_A');
    gameKeeper.storeGame(minesweeperA);
    expect(gameKeeper.size()).toEqual(1);
  });
  it('Create and store game B', () => {
    let minesweeperB = new Minesweeper('MockGameKeeperArchive_B');
    gameKeeper.storeGame(minesweeperB);
    expect(gameKeeper.size()).toEqual(2);
  });
  it('Expect game A is correctly loaded.', () => {
    let minesweeperA = gameKeeper.loadGame('MockGameKeeperArchive_A');
    expect(minesweeperA.getGameId()).toEqual('MockGameKeeperArchive_A');
  });
  it('Expect game B is correctly loaded.', () => {
    let minesweeperB = gameKeeper.loadGame('MockGameKeeperArchive_B');
    expect(minesweeperB.getGameId()).toEqual('MockGameKeeperArchive_B');
  });
  //TODO: necessary to create the unit test to update the games
});