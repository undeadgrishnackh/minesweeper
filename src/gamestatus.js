class GameStatus {
  constructor() {
    this.status = 'WaitForTheNextMove';
    this.code   = 200;
  }

  setGameIsOver() {
    this.status = 'GameOver';
    this.code   = 201;
  }

  getStatus() {
    return this.status;
  }

  getHTTPCode(){
    return this.code;
  }
}

module.exports.GameStatus = GameStatus;