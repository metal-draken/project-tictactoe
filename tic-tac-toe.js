const players = ["player1", "player2"];
const states = ["open", "player1won", "player2won", "draw"];
const squareStates = ["not set", "player 1", "player 2"];

class TicTacToe {
  constructor() {
    this.field = [
      [".", ".", "."],
      [".", ".", "."],
      [".", ".", "."],
    ];
    this.currentPlayer = players[0];
    this.currentState = states[0];
    this.movesArray = [];
  }

  resetGame() {
    this.field = [
      [".", ".", "."],
      [".", ".", "."],
      [".", ".", "."],
    ];
    this.currentPlayer = players[0];
    this.currentState = states[0];
  }

  gameState() {
    if (
      (this.field[0][0] == "X") &
        (this.field[0][1] == "X") &
        (this.field[0][2] == "X") ||
      (this.field[1][0] == "X") &
        (this.field[1][1] == "X") &
        (this.field[1][2] == "X") ||
      (this.field[2][0] == "X") &
        (this.field[2][1] == "X") &
        (this.field[2][2] == "X") ||
      (this.field[0][0] == "X") &
        (this.field[1][0] == "X") &
        (this.field[2][0] == "X") ||
      (this.field[0][1] == "X") &
        (this.field[1][1] == "X") &
        (this.field[2][1] == "X") ||
      (this.field[0][2] == "X") &
        (this.field[1][2] == "X") &
        (this.field[2][2] == "X") ||
      (this.field[0][0] == "X") &
        (this.field[1][1] == "X") &
        (this.field[2][2] == "X") ||
      (this.field[2][0] == "X") &
        (this.field[1][1] == "X") &
        (this.field[0][2] == "X")
    ) {
      this.currentState = states[1];
      console.log("Player 1 has won. Reiniating the Game.");
      this.resetGame();
    }

    if (
      (this.field[0][0] == "O") &
        (this.field[0][1] == "O") &
        (this.field[0][2] == "O") ||
      (this.field[1][0] == "O") &
        (this.field[1][1] == "O") &
        (this.field[1][2] == "O") ||
      (this.field[2][0] == "O") &
        (this.field[2][1] == "O") &
        (this.field[2][2] == "O") ||
      (this.field[0][0] == "O") &
        (this.field[1][0] == "O") &
        (this.field[2][0] == "O") ||
      (this.field[0][1] == "O") &
        (this.field[1][1] == "O") &
        (this.field[2][1] == "O") ||
      (this.field[0][2] == "O") &
        (this.field[1][2] == "O") &
        (this.field[2][2] == "O") ||
      (this.field[0][0] == "O") &
        (this.field[1][1] == "O") &
        (this.field[2][2] == "O") ||
      (this.field[2][0] == "O") &
        (this.field[1][1] == "O") &
        (this.field[0][2] == "O")
    ) {
      this.currentState = states[2];
      console.log("Player 2 has won. Reiniating the Game.");
      this.resetGame();
    }
    if (
      !this.field[0].includes(".") &
      !this.field[1].includes(".") &
      !this.field[2].includes(".")
    ) {
      this.currentState = states[3];
      console.log("Draw. Reiniating the Game.");
      this.resetGame();
    } else {
      this.currentState = states[0];
    }
  }

  move(a, b) {
    if (this.field[a][b] == "X" || this.field[a][b] == "O") {
      console.log("This square is already ocupied");
      return "This square is already ocupied";
      console.table(ticTacToe.field);
      console.log(ticTacToe.currentPlayer);
    }
    if (this.currentPlayer == players[0]) {
      this.field[a][b] = "X";
      this.currentPlayer = players[1];
      console.table(ticTacToe.field);
      console.log(ticTacToe.currentPlayer);
    } else {
      this.field[a][b] = "O";
      this.currentPlayer = players[0];
      console.table(ticTacToe.field);
      console.log(ticTacToe.currentPlayer);
    }
  }

  selectUpLeft() {
    this.move(0, 0);
    this.gameState();
  }
  selectUpCenter() {
    this.move(0, 1);
    this.gameState();
  }
  selectUpRight() {
    this.move(0, 2);
    this.gameState();
  }
  selectCenterLeft() {
    this.move(1, 0);
    this.gameState();
  }
  selectCenterCenter() {
    this.move(1, 1);
    this.gameState();
  }
  selectCenterRight() {
    this.move(1, 2);
    this.gameState();
  }
  selectDownLeft() {
    this.move(2, 0), this.gameState();
  }
  selectDownCenter() {
    this.move(2, 1);
    this.gameState();
  }
  selectDownRight() {
    this.move(2, 2);
    this.gameState();
  }

  /*
     moves(a) {
         this.movesArray = [this.selectUpLeft(),
            this.selectUpCenter(),
            this.selectUpRight(),
            this.selectCenterLeft(),
            this.selectCenterCenter(),
            this.selectCenterRight(),
            this.selectDownLeft(),
            this.selectDownCenter(),
            this.selectDownRight()];
        this.movesArray[a];
    }
    THIS DIDN'T WORK...

    */
}

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
