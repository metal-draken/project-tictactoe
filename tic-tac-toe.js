export const marks = {
  P1: "X",
  P2: "O",
  Empty: ".",
};

export const players = {
  P1: "player1",
  P2: "player2",
};

export const states = {
  open: "open",
  P1: "player1won",
  P2: "player2won",
  draw: "draw",
};

export class TicTacToe {
  // Saninn's comment: Usually the functions should be defined AFTER the constructor... but ok...
  resetGame() {
    this.field = [
      new Array(3).fill(marks.Empty),
      new Array(3).fill(marks.Empty),
      new Array(3).fill(marks.Empty),
    ];
    this.currentPlayer = players.P1;
    this.currentState = states.open;
    console.table(this.field);
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

  _boardIsFull() {
    return (
      !this.field[0].includes(marks.Empty) &
      !this.field[1].includes(marks.Empty) &
      !this.field[2].includes(marks.Empty)
    );
  }

  _gameState() {
    if (this._playerHasWon(marks.P1)) {
      this.currentState = states.P1;
      console.log("Player 1 has won.");
      return;
    }

    if (this._playerHasWon(marks.P2)) {
      this.currentState = states.P2;
      console.log("Player 2 has won.");
      return;
    }

    if (this._boardIsFull()) {
      this.currentState = states.draw;
      console.log("Draw.");
      return;
    }
  }

  play(coord1, coord2) {
    const newState = this._move(coord1, coord2);
    this._gameState();
    return newState;
  }

  _move(a, b) {
    if (this.field[a][b] !== marks.Empty) {
      console.log("This square is already occupied");
      console.log(this.currentPlayer);
      return "This square is already occupied";
    }
    if (this.currentPlayer == players.P1) {
      this.field[a][b] = marks.P1;
      this.currentPlayer = players.P2;
      console.table(this.field);
      console.log(this.currentPlayer);
    } else {
      this.field[a][b] = marks.P2;
      this.currentPlayer = players.P1;
      console.table(this.field);
      console.log(this.currentPlayer);
    }
  }
}
