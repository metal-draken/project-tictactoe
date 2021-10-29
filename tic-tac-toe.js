const Marks = {
  P1: "X",
  P2: "O",
  Empty: ".",
};

const players = ["player1", "player2"];
const states = ["open", "player1won", "player2won", "draw"];
const squareStates = ["not set", "player 1", "player 2"];

export class TicTacToe {
  // Saninn's comment: Usually the functions should be defined AFTER the constructor... but ok...
  resetGame() {
    this.field = [
      [Marks.Empty, Marks.Empty, Marks.Empty],
      [Marks.Empty, Marks.Empty, Marks.Empty],
      [Marks.Empty, Marks.Empty, Marks.Empty],
    ];
    this.currentPlayer = players[0];
    this.currentState = states[0];
  }

  constructor() {
    this.resetGame();
  }

  _playerHasWon(userMark) {
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

  _gameState() {
    if (this._playerHasWon(Marks.P1)) {
      this.currentState = states[1];
      console.log("Player 1 has won.");
      return;
    }

    if (this._playerHasWon(Marks.P2)) {
      this.currentState = states[2];
      console.log("Player 2 has won.");
      return;
    }

    if (
      !this.field[0].includes(Marks.Empty) &
      !this.field[1].includes(Marks.Empty) &
      !this.field[2].includes(Marks.Empty)
    ) {
      this.currentState = states[3];
      console.log("Draw.");
      this.resetGame();
      return;
    } /*else {
      this.currentState = states[0];
    }*/
  }

  _move(a, b) {
    if (this.field[a][b] == Marks.P1 || this.field[a][b] == Marks.P2) {
      console.log("This square is already occupied");
      console.log(this.currentPlayer);
      return "This square is already occupied";
    }
    if (this.currentPlayer == players[0]) {
      this.field[a][b] = Marks.P1;
      this.currentPlayer = players[1];
      console.table(this.field);
      console.log(this.currentPlayer);
    } else {
      this.field[a][b] = Marks.P2;
      this.currentPlayer = players[0];
      console.table(this.field);
      console.log(this.currentPlayer);
    }
  }

  selectUpLeft() {
    const newState = this._move(0, 0);
    this._gameState();
    return newState;
  }

  selectUpCenter() {
    const newState = this._move(0, 1);
    this._gameState();
    return newState;
  }

  selectUpRight() {
    const newState = this._move(0, 2);
    this._gameState();
    return newState;
  }

  selectCenterLeft() {
    const newState = this._move(1, 0);
    this._gameState();
    return newState;
  }

  selectCenterCenter() {
    const newState = this._move(1, 1);
    this._gameState();
    return newState;
  }

  selectCenterRight() {
    const newState = this._move(1, 2);
    this._gameState();
    return newState;
  }

  selectDownLeft() {
    const newState = this._move(2, 0);
    this._gameState();
    return newState;
  }

  selectDownCenter() {
    const newState = this._move(2, 1);
    this._gameState();
    return newState;
  }

  selectDownRight() {
    const newState = this._move(2, 2);
    this._gameState();
    return newState;
  }
}
