import express from 'express';
import bodyParser from 'body-parser';
let { Minesweeper } = require('../src/minesweeper');

// Set up the express app
const app = express();
// Setup to parse the parameters
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

const minesweeperAPI_GET = (req, res) => {
  let minesweeper = new Minesweeper(req.headers.gameid);
  console.log("GET: gameid = " + req.headers.gameid + " -- Board = " + minesweeper.getBoard());
  res.status(200).send({
    gameId: req.headers.gameid,
    status: minesweeper.getGameStatus(),
    board: minesweeper.getBoard()
  });
};

const minesweeperAPI_POST = (req, res) => {
  let minesweeper = new Minesweeper(req.body.gameId);
  console.log("POST: gameid = " + req.body.gameId + " -- Board = " + minesweeper.getBoard());
  minesweeper.tick(req.body.row, req.body.column);
  console.log("POST: gameid = " + req.body.gameId + " -- Tick("+ req.body.row + "," + req.body.col + ") -- Board = " + minesweeper.getBoard());
  res.status(minesweeper.getHTTPGameStatus()).send({
    gameId: req.body.gameId,
    status: minesweeper.getGameStatus(),
    board: minesweeper.getBoard()
  });
};

const PORT = 5000;
const HOST = '0.0.0.0';
app.listen(PORT, HOST, () => {
  console.log(`server running on port http://${HOST}:${PORT}`)
});



app.get('/api/gameportal/minesweeper/1.0.0/play', (req, res) => {
    minesweeperAPI_GET(req, res);
});

app.post('/api/gameportal/minesweeper/1.0.0/play', (req, res) => {
  minesweeperAPI_POST(req, res);
});

module.exports = app;