const TicTacToe = require("./tic-tac-toe").TicTacToe;

/*import { TicTacToe } from "./tic-tac-toe.js";*/

let ticTacToe = new TicTacToe();

ticTacToe.selectUpLeft();
ticTacToe.selectDownLeft();
ticTacToe.selectUpCenter();
ticTacToe.selectDownRight();
ticTacToe.selectUpRight();

ticTacToe.selectUpLeft();
ticTacToe.selectUpCenter();
ticTacToe.selectUpRight();
ticTacToe.selectCenterCenter();
ticTacToe.selectCenterRight();
ticTacToe.selectDownRight();
ticTacToe.selectDownCenter();
ticTacToe.selectDownLeft();
ticTacToe.selectCenterLeft();
