import { TicTacToe } from "./tic-tac-toe.js";
import assert from "assert";

/*
let test = new TicTacToe();

test.selectUpLeft();
test.selectDownLeft();
test.selectUpCenter();
test.selectDownRight();
test.selectUpRight();

test.selectUpLeft();
test.selectUpCenter();
test.selectUpRight();
test.selectCenterCenter();
test.selectCenterRight();
test.selectDownRight();
test.selectDownCenter();
test.selectDownLeft();
test.selectCenterLeft();
*/

console.log("-------------------test1-------------------");

(function test_getGameState_shouldInitiallyBeOpen() {
  assert.equal(new TicTacToe().currentState, "open");
})();

console.log("-------------------test2-------------------");

(function test_currentPlayer_shouldInitiallyBePlayerOne() {
  assert.equal(new TicTacToe().currentPlayer, "player1");
})();

console.log("-------------------test3-------------------");

(function test_act_shouldRefreshGameState_player1Won() {
  const ttt = new TicTacToe();
  ttt.selectUpLeft();
  ttt.selectDownLeft();
  ttt.selectUpCenter();
  ttt.selectDownRight();
  ttt.selectUpRight();
  assert.equal(ttt.currentState, "player1won");
})();

console.log("-------------------test4-------------------");

function test_act_shouldReturnTextIfMoveIsInvalid() {
  const ttt = new TicTacToe();
  ttt.selectUpLeft();
  assert.equal(ttt.selectUpLeft(), "This square is already occupied");
}
test_act_shouldReturnTextIfMoveIsInvalid();
