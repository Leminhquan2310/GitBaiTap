class Player {
  constructor(value) {
    this.value = value;
    this.render = () => {
      return `<span class='${this.value}'>${this.value.toUpperCase()}</span>`;
    };
  }
}

class BoardGame {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.playerX = new Player("x");
    this.playerO = new Player("o");
    this.currentPlayer = this.playerX.value;
    this.board = Array.from({ length: this.rows }, () =>
      Array(this.cols).fill("")
    );
    this.gameDiv = document.getElementById("game");

    this.renderBoard();
  }
  renderBoard = () => {
    this.gameDiv.innerHTML = "";
    for (let i = 0; i < 20; i++) {
      for (let j = 0; j < 20; j++) {
        const cell = document.createElement("div");
        cell.className = "cell";
        cell.id = `${i}-${j}`;
        cell.style = ` left: ${(j + 1) * 30}px;top: ${(i + 1) * 30}px;`;
        cell.addEventListener("click", () => this.handleClick(cell.id));
        this.gameDiv.appendChild(cell);
      }
    }
  };

  handleClick = (id) => {
    let [pointX, pointY] = id.split("-");
    console.log(pointX, pointY);
    console.log(this.board);

    // check ô đã được chọn hay chưa
    if (this.board[Number(pointX)][Number(pointY)] !== "") return;

    if (this.currentPlayer == this.playerX.value) {
      this.board[Number(pointX)][Number(pointY)] = this.playerX.value;
      document.getElementById(id).innerHTML = this.playerX.render();
    }
    if (this.currentPlayer == this.playerO.value) {
      this.board[Number(pointX)][Number(pointY)] = this.playerO.value;
      document.getElementById(id).innerHTML = this.playerO.render();
    }

    if (this.checkWin(Number(pointX), Number(pointY), this.currentPlayer)) {
      alert(this.currentPlayer + " Thắng!");
    }
    this.currentPlayer =
      this.currentPlayer == this.playerX.value
        ? this.playerO.value
        : this.playerX.value;
  };

  checkHorizontal = (x, y, player) => {
    let count = 1;
    for (let i = 1; i < 5; i++) {
      if (y + i < 20 && this.board[x][y + i] === player) {
        count++;
      } else {
        break;
      }
    }
    for (let i = 1; i < 5; i++) {
      if (y - i >= 0 && this.board[x][y - i] === player) {
        count++;
      } else {
        break;
      }
    }
    return count;
  };

  checkVertical = (x, y, player) => {
    let count = 1;
    for (let i = 1; i < 5; i++) {
      if (x + i < 20 && this.board[x + i][y] === player) {
        count++;
      } else {
        break;
      }
    }
    for (let i = 1; i < 5; i++) {
      if (x - i >= 0 && this.board[x - i][y] === player) {
        count++;
      } else {
        break;
      }
    }
    return count;
  };
  checkLeftDiagonal = (x, y, player) => {
    let count = 1;
    for (let i = 1; i < 5; i++) {
      if (x + i < 20 && y + i < 20 && this.board[x + i][y + i] === player) {
        count++;
      } else {
        break;
      }
    }
    for (let i = 1; i < 5; i++) {
      if (x - i >= 0 && y - i >= 0 && this.board[x - i][y - i] === player) {
        count++;
      } else {
        break;
      }
    }
    return count;
  };
  checkRightDiagonal = (x, y, player) => {
    let count = 1;
    for (let i = 1; i < 5; i++) {
      if (x + i < 20 && y - i < 20 && this.board[x + i][y - i] === player) {
        count++;
      } else {
        break;
      }
    }
    for (let i = 1; i < 5; i++) {
      if (x - i >= 0 && y + i >= 0 && this.board[x - i][y + i] === player) {
        count++;
      } else {
        break;
      }
    }
    return count;
  };

  checkWin = (x, y, player) => {
    return (
      this.checkHorizontal(x, y, player) >= 5 ||
      this.checkVertical(x, y, player) >= 5 ||
      this.checkLeftDiagonal(x, y, player) >= 5 ||
      this.checkRightDiagonal(x, y, player) >= 5
    );
  };
}

window.addEventListener("load", () => {
  const game = new BoardGame(20, 20);
});
