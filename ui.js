import * as TTT from "./tic-tac-toe.js";

let game = new TTT.TicTacToe();
let players = TTT.players;
let marks = TTT.marks;
let states = TTT.states;

let upLeft = document.querySelector("#up-left");
let upCenter = document.querySelector("#up-center");
let upRight = document.querySelector("#up-right");
let centerLeft = document.querySelector("#center-left");
let centerCenter = document.querySelector("#center-center");
let centerRight = document.querySelector("#center-right");
let downLeft = document.querySelector("#down-left");
let downCenter = document.querySelector("#down-center");
let downRight = document.querySelector("#down-right");

let circleGame = document.querySelectorAll(".little-circle");
let circleWin = document.querySelectorAll(".big-circle");
let crossGame = document.querySelectorAll(".little-cross");
let crossWin = document.querySelectorAll(".big-cross");

/*

I'M TRYING TO TRANSFORM THE FUNCTIONS FROM DOWNSIDE TO A SINGLE FUNCTION
BUT I AM FAILING MISERABLY :D! (NEVERMIND... I DID IT)*/

let gameApp = function (a, b, c, d) {
  d;
  if (game.field[a][b] == TTT.marks.P1) {
    crossGame[c].style.display = "block";
    return;
  }
  if (game.field[a][b] == TTT.marks.P2) {
    circleGame[c].style.display = "block";
    return;
  }
};

upLeft.onclick = function () {
  gameApp(0, 0, 0, game.selectUpLeft());
};

upCenter.onclick = function () {
  gameApp(0, 1, 1, game.selectUpCenter());
};

upRight.onclick = function () {
  gameApp(0, 2, 2, game.selectUpRight());
};

centerLeft.onclick = function () {
  gameApp(1, 0, 3, game.selectCenterLeft());
};

centerCenter.onclick = function () {
  gameApp(1, 1, 4, game.selectCenterCenter());
};

centerRight.onclick = function () {
  gameApp(1, 2, 5, game.selectCenterRight());
};

downLeft.onclick = function () {
  gameApp(2, 0, 6, game.selectDownLeft());
};

downCenter.onclick = function () {
  gameApp(2, 1, 7, game.selectDownCenter());
};

downRight.onclick = function () {
  gameApp(2, 2, 8, game.selectDownRight());
};

/*upLeft.onclick = function () {
  game.selectUpLeft();
  if (game.field[0][0] == TTT.marks.P1) {
    crossGame[0].style.display = "block";
    return;
  }
  if (game.field[0][0] == TTT.marks.P2) {
    circleGame[0].style.display = "block";
    return;
  }
};

upCenter.onclick = function () {
  game.selectUpCenter();
  if (game.field[0][1] == TTT.marks.P1) {
    crossGame[1].style.display = "block";
    return;
  }
  if (game.field[0][1] == TTT.marks.P2) {
    circleGame[1].style.display = "block";
    return;
  }
};

upRight.onclick = function () {
  game.selectUpRight();
  if (game.field[0][2] == TTT.marks.P1) {
    crossGame[2].style.display = "block";
    return;
  }
  if (game.field[0][2] == TTT.marks.P2) {
    circleGame[2].style.display = "block";
    return;
  }
};

/*function testCircle() {
  console.log("Test");
  circleGame.style.display = "block";
}

upLeft.addEventListener("click", testCircle);*/
