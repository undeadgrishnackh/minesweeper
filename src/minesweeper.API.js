import express from 'express';
import game from '../test/mocks/Scenario.GameOver';

// Set up the express app
const app = express();

// get the MOCK scenario
  app.get('/minesweeper/1.0.0/play', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'Scenario retrieved successfully',
    game: game
  })
});
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});