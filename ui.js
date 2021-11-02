import * as TTT from "./tic-tac-toe.js";

const game = new TTT.TicTacToe();

const upLeft = document.querySelector("#up-left");
const upCenter = document.querySelector("#up-center");
const upRight = document.querySelector("#up-right");
const centerLeft = document.querySelector("#center-left");
const centerCenter = document.querySelector("#center-center");
const centerRight = document.querySelector("#center-right");
const downLeft = document.querySelector("#down-left");
const downCenter = document.querySelector("#down-center");
const downRight = document.querySelector("#down-right");

const circleGame = document.querySelectorAll(".little-circle");
const crossGame = document.querySelectorAll(".little-cross");

const bigCircle = "big-circle";
const bigCross = "big-cross";
const WinBox = "win";

const resetButton = document.querySelector("button");
const playerSign = document.querySelectorAll(".player");
const boxes = document.querySelectorAll(".boxes");

let test = () => {
  console.log(game.field[0][0]);
  console.log(TTT.marks.P1);
};

test();

let changeToWinSymbols = () => {
  if (
    game.field[0][0] === TTT.marks.P1 &&
    game.field[0][1] === TTT.marks.P1 &&
    game.field[0][2] === TTT.marks.P1
  ) {
    crossGame[0].classList.add(bigCross);
    crossGame[1].classList.add(bigCross);
    crossGame[2].classList.add(bigCross);
    boxes[0].classList.add(WinBox);
    boxes[1].classList.add(WinBox);
    boxes[2].classList.add(WinBox);
    playerSign[1].style.display = "block";
    playerSign[0].style.display = "block";
    return;
  }

  if (
    game.field[0][0] === TTT.marks.P2 &&
    game.field[0][1] === TTT.marks.P2 &&
    game.field[0][2] === TTT.marks.P2
  ) {
    circleGame[0].classList.add(bigCircle);
    circleGame[1].classList.add(bigCircle);
    circleGame[2].classList.add(bigCircle);
    boxes[0].classList.add(WinBox);
    boxes[1].classList.add(WinBox);
    boxes[2].classList.add(WinBox);
    playerSign[1].style.display = "block";
    playerSign[0].style.display = "block";
    return;
  }
};

boxes.forEach(function (box, index) {
  box.onclick = function () {
    const coord1 = Number(box.getAttribute("data-coord1"));
    const coord2 = Number(box.getAttribute("data-coord2"));
    if (game.currentState == TTT.states.open) {
      game.play(coord1, coord2);
    }
    if (game.field[coord1][coord2] == TTT.marks.P1) {
      crossGame[index].style.display = "block";
      playerSign[0].style.display = "none";
      playerSign[1].style.display = "block";
      changeToWinSymbols();
      return;
    }
    if (game.field[coord1][coord2] == TTT.marks.P2) {
      circleGame[index].style.display = "block";
      playerSign[1].style.display = "none";
      playerSign[0].style.display = "block";
      changeToWinSymbols();
      return;
    }
  };
});

resetButton.onclick = function () {
  game.resetGame();
  circleGame.forEach(function (circles, index) {
    circleGame[index].style.display = "none";
  });

  crossGame.forEach(function (cross, index) {
    crossGame[index].style.display = "none";
  });

  playerSign[1].style.display = "none";
  playerSign[0].style.display = "block";
  boxes.forEach(function (box) {
    box.classList.remove(WinBox);
  });
  crossGame.forEach(function (box) {
    box.classList.remove(bigCross);
  });
  circleGame.forEach(function (box) {
    box.classList.remove(bigCircle);
  });
};

/*

function gameClickOnSquare(
  arrayIndexSup,
  arrayIndexInf,
  markInWichSquare,
  functionToCall
) {
  if (game.currentState == TTT.states.open) {
    functionToCall.bind(game)();
  }

  if (game.field[arrayIndexSup][arrayIndexInf] == TTT.marks.P1) {
    crossGame[markInWichSquare].style.display = "block";
    return;
  }
  if (game.field[arrayIndexSup][arrayIndexInf] == TTT.marks.P2) {
    circleGame[markInWichSquare].style.display = "block";
    return;
  }
}


upLeft.onclick = function () {
  gameClickOnSquare(0, 0, 0, game.selectUpLeft);
};

upCenter.onclick = function () {
  gameClickOnSquare(0, 1, 1, game.selectUpCenter);
};

upRight.onclick = function () {
  gameClickOnSquare(0, 2, 2, game.selectUpRight);
};

centerLeft.onclick = function () {
  gameClickOnSquare(1, 0, 3, game.selectCenterLeft);
};

centerCenter.onclick = function () {
  gameClickOnSquare(1, 1, 4, game.selectCenterCenter);
};

centerRight.onclick = function () {
  gameClickOnSquare(1, 2, 5, game.selectCenterRight);
};

downLeft.onclick = function () {
  gameClickOnSquare(2, 0, 6, game.selectDownLeft);
};

downCenter.onclick = function () {
  gameClickOnSquare(2, 1, 7, game.selectDownCenter);
};

downRight.onclick = function () {
  gameClickOnSquare(2, 2, 8, game.selectDownRight);
};






upLeft.onclick = function () {
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

function testCircle() {
  console.log("Test");
  circleGame.style.display = "block";
}

upLeft.addEventListener("click", testCircle);*/
