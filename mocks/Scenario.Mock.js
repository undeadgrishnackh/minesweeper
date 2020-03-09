// Mock database with all the scenarios
// NB: all the MOCKs have to start with the TOKEN: "Mock"
const GameMocks =
  {
    MockGameOver3x3:
      {
        title: "Game Over 3x3",
        description: "Mock Scenario developed for Game Over Test Suite with a click in (1,1).",
        board: [["X", "X", "X"],["X", "X", "X"],["X", "X", "X"]],
        mines: [[0, 0, 0],[0, 1, 0],[0, 0, 0]]
      }
  }
;

module.exports.GameMocks = GameMocks;