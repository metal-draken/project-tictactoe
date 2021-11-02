import * as TTT from "./tic-tac-toe.js";

const game = new TTT.TicTacToe();

const circleGame = document.querySelectorAll(".little-circle");
const crossGame = document.querySelectorAll(".little-cross");

const bigCircle = "big-circle";
const bigCross = "big-cross";
const WinBox = "win";

const resetButton = document.querySelector("button");
const playerSign = document.querySelectorAll(".player");
const boxes = document.querySelectorAll(".boxes");

const textWindow = document.querySelector("#text-game-container");
const textWindowText = document.querySelector("#text-screen");

let closeTextWindow = () => {
  textWindow.onclick = function () {
    textWindow.style.display = "none";
  };
};

closeTextWindow();

let openTextWindow = () => {
  if (game.currentState === TTT.states.P1) {
    textWindowText.textContent = "¡Player 1 has won!  Congratulations";
    textWindow.style.display = "flex";
    return;
  }
  if (game.currentState === TTT.states.P2) {
    textWindowText.textContent = "¡Player 2 has won!  Congratulations";
    textWindow.style.display = "flex";
    return;
  }
  if (game.currentState === TTT.states.draw) {
    textWindowText.textContent = "¡It's been a draw!  Try again";
    textWindow.style.display = "flex";
    return;
  }
};

let openTextWindow2 = () => {
  textWindowText.textContent = "This square is already occupied";
  textWindow.style.display = "flex";
  return;
};

let winners = (winnerSq1, winnerSq2, winnerSq3) => {
  if (
    crossGame[winnerSq1].style.display === "block" &&
    crossGame[winnerSq2].style.display === "block" &&
    crossGame[winnerSq3].style.display === "block"
  ) {
    crossGame[winnerSq1].classList.add(bigCross);
    crossGame[winnerSq2].classList.add(bigCross);
    crossGame[winnerSq3].classList.add(bigCross);
    boxes[winnerSq1].classList.add(WinBox);
    boxes[winnerSq2].classList.add(WinBox);
    boxes[winnerSq3].classList.add(WinBox);
    playerSign[1].style.display = "block";
    playerSign[0].style.display = "block";
    return;
  }
  if (
    circleGame[winnerSq1].style.display === "block" &&
    circleGame[winnerSq2].style.display === "block" &&
    circleGame[winnerSq3].style.display === "block"
  ) {
    circleGame[winnerSq1].classList.add(bigCircle);
    circleGame[winnerSq2].classList.add(bigCircle);
    circleGame[winnerSq3].classList.add(bigCircle);
    boxes[winnerSq1].classList.add(WinBox);
    boxes[winnerSq2].classList.add(WinBox);
    boxes[winnerSq3].classList.add(WinBox);
    playerSign[1].style.display = "block";
    playerSign[0].style.display = "block";
    return;
  }
};

let changeToWinSymbols = () => {
  winners(0, 1, 2);
  winners(3, 4, 5);
  winners(6, 7, 8);
  winners(0, 3, 6);
  winners(1, 4, 7);
  winners(2, 5, 8);
  winners(0, 4, 8);
  winners(6, 4, 2);
};

boxes.forEach(function (box, index) {
  box.onclick = function () {
    const coord1 = Number(box.getAttribute("data-coord1"));
    const coord2 = Number(box.getAttribute("data-coord2"));
    if (game.field[coord1][coord2] !== TTT.marks.Empty) {
      openTextWindow2();
      return;
    }
    if (game.currentState == TTT.states.open) {
      game.play(coord1, coord2);
    }
    if (game.field[coord1][coord2] == TTT.marks.P1) {
      crossGame[index].style.display = "block";
      playerSign[0].style.display = "none";
      playerSign[1].style.display = "block";
      changeToWinSymbols();
      openTextWindow();
      return;
    }
    if (game.field[coord1][coord2] == TTT.marks.P2) {
      circleGame[index].style.display = "block";
      playerSign[1].style.display = "none";
      playerSign[0].style.display = "block";
      changeToWinSymbols();
      openTextWindow();
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
  textWindow.style.display = "none";
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
