// Mock database with all the scenarios
// NB: all the MOCKs have to start with the TOKEN: "Mock"
const GameMocks =
  {
    MockGameKeeperArchive:
      {
        title: "Game saved by the gamekeeper",
        description: "Mock Scenario developed for the GameKeeper suite. The game is saved into the game archive and then manipulated to check the basic CRUD options",
        board: [["R0C0", "R0C1", "R0C2"],["R1C0", "R1C1", "R1C2"],["R2C0", "R2C1", "R2C2"]],
        mines: [[1, 2, 3],[4, 5, 6],[7, 8, 9]]
      },
    MockGameKeeperArchive_A:
      {
        title: "Gamekeeper multiple games scenario",
        description: "Game A stored and updated into the gamekeeper",
        board: [["1", "X", "X"],["X", "X", "X"],["X", "X", "X"]],
        mines: [[0, 0, 0],[0, 1, 0],[0, 0, 0]]
      },
    MockGameKeeperArchive_B:
      {
        title: "Gamekeeper multiple games scenario",
        description: "Game A stored and updated into the gamekeeper",
        board: [["X", "X", "X"],["1", "1", "X"],["X", "X", "X"]],
        mines: [[0, 0, 0],[0, 0, 0],[0, 1, 0]]
      },
    MockGameOver3x3:
      {
        title: "Game Over 3x3",
        description: "Mock Scenario developed for Game Over Test Suite with a click in (1,1).",
        board: [["X", "X", "X"],["X", "X", "X"],["X", "X", "X"]],
        mines: [[0, 0, 0],[0, 1, 0],[0, 0, 0]]
      },
    MockSafeMove3x3:
      {
        title: "Safe Move 3x3",
        description: "Mock Scenario developed for Safe Move Test Suite with a click in (1,1).",
        board: [["X", "X", "X"],["X", "X", "X"],["X", "X", "X"]],
        mines: [[0, 0, 0],[0, 0, 0],[0, 1, 0]]
      }
  }
;

module.exports.GameMocks = GameMocks;