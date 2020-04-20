const loki = require('lokijs');
const db = new loki('minesweeper.db');

class GameKeeper {
  constructor() {
    this.minesweeperDB = db.addCollection('minesweeper');
  }

  storeGame(minesweeperToStore){
    this.minesweeperDB.insert(minesweeperToStore);
  }

  size() {
    return this.minesweeperDB.count();
  }

  loadGame(gameIdToFind){
    return this.minesweeperDB.findOne({'gameId': gameIdToFind});
  }

  updateGame(minesweeperToUpdate) {
    this.minesweeperDB.update(minesweeperToUpdate);
  }

  clearDatabase(options) {
    this.minesweeperDB.clear(options);
  }
}

module.exports.GameKeeper = GameKeeper;
