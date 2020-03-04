class GameStatus {
  constructor() {
    this.status = 'WaitForTheNextMove';
  }

  getStatus() {
    return this.status;
  }

  gameOver() {
    this.status = 'GameOver';
  }
}

module.exports.GameStatus = GameStatus;