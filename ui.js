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

textWindow.onclick = function () {
  textWindow.style.display = "none";
};

let openTextWindowGameState = () => {
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

let openTextWindowSqareOccupied = () => {
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
      openTextWindowSqareOccupied();
      return;
    }
    if (game.currentState === TTT.states.open) {
      game.play(coord1, coord2);
    }
    if (game.field[coord1][coord2] == TTT.marks.P1) {
      crossGame[index].style.display = "block";
      playerSign[0].style.display = "none";
      playerSign[1].style.display = "block";
      changeToWinSymbols();
      openTextWindowGameState();
      return;
    }
    if (game.field[coord1][coord2] == TTT.marks.P2) {
      circleGame[index].style.display = "block";
      playerSign[1].style.display = "none";
      playerSign[0].style.display = "block";
      changeToWinSymbols();
      openTextWindowGameState();
      return;
    }
  };
});

resetButton.onclick = function () {
  game.resetGame();
  circleGame.forEach(function (box, index) {
    circleGame[index].style.display = "none";
    box.classList.remove(bigCircle);
  });

  crossGame.forEach(function (box, index) {
    crossGame[index].style.display = "none";
    box.classList.remove(bigCross);
  });

  playerSign[1].style.display = "none";
  playerSign[0].style.display = "block";
  boxes.forEach(function (box) {
    box.classList.remove(WinBox);
  });
  textWindow.style.display = "none";
};
