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

  playerHasWon(userMark) {
    // returns boolean
    if (
      (this.field[0][0] === userMark) &
        (this.field[0][1] === userMark) &
        (this.field[0][2] === userMark) ||
      (this.field[1][0] === userMark) &
        (this.field[1][1] === userMark) &
        (this.field[1][2] === userMark) ||
      (this.field[2][0] === userMark) &
        (this.field[2][1] === userMark) &
        (this.field[2][2] === userMark) ||
      (this.field[0][0] === userMark) &
        (this.field[1][0] === userMark) &
        (this.field[2][0] === userMark) ||
      (this.field[0][1] === userMark) &
        (this.field[1][1] === userMark) &
        (this.field[2][1] === userMark) ||
      (this.field[0][2] === userMark) &
        (this.field[1][2] === userMark) &
        (this.field[2][2] === userMark) ||
      (this.field[0][0] === userMark) &
        (this.field[1][1] === userMark) &
        (this.field[2][2] === userMark) ||
      (this.field[2][0] === userMark) &
        (this.field[1][1] === userMark) &
        (this.field[0][2] === userMark)
    ) {
      return true;
    }

    return false;
  }

  gameState() {
    if (this.playerHasWon("X")) {
      this.currentState = states[1];
      console.log("Player 1 has won.");
      return;
    }

    if (this.playerHasWon("O")) {
      this.currentState = states[2];
      console.log("Player 2 has won.");
      return;
    }

    if (
      !this.field[0].includes(".") &
      !this.field[1].includes(".") &
      !this.field[2].includes(".")
    ) {
      this.currentState = states[3];
      console.log("Draw.");
      this.resetGame();
      return;
    } /*else {
      this.currentState = states[0];
    }*/
  }

  move(a, b) {
    if (this.field[a][b] == "X" || this.field[a][b] == "O") {
      console.log("This square is already occupied");
      console.log(this.currentPlayer);
      return "This square is already occupied";
    }
    if (this.currentPlayer == players[0]) {
      this.field[a][b] = "X";
      this.currentPlayer = players[1];
      console.table(this.field);
      console.log(this.currentPlayer);
    } else {
      this.field[a][b] = "O";
      this.currentPlayer = players[0];
      console.table(this.field);
      console.log(this.currentPlayer);
    }
  }

  selectUpLeft() {
    const newState = this.move(0, 0);
    this.gameState();
    return newState;
  }

  selectUpCenter() {
    const newState = this.move(0, 1);
    this.gameState();
    return newState;
  }

  selectUpRight() {
    const newState = this.move(0, 2);
    this.gameState();
    return newState;
  }

  selectCenterLeft() {
    const newState = this.move(1, 0);
    this.gameState();
    return newState;
  }

  selectCenterCenter() {
    const newState = this.move(1, 1);
    this.gameState();
    return newState;
  }

  selectCenterRight() {
    const newState = this.move(1, 2);
    this.gameState();
    return newState;
  }

  selectDownLeft() {
    const newState = this.move(2, 0);
    this.gameState();
    return newState;
  }

  selectDownCenter() {
    const newState = this.move(2, 1);
    this.gameState();
    return newState;
  }

  selectDownRight() {
    const newState = this.move(2, 2);
    this.gameState();
    return newState;
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

module.exports.TicTacToe = TicTacToe;
