class Game {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext("2d");

    this.board = new Board(this.canvas.width, this.canvas.height);
    this.ball = new Ball(this.board.width / 2, this.board.height / 2, 20, -3, -3);
    this.bar = new Bar(500, 700, 200);
    this.score = 0;

    window.addEventListener("keydown", this.handleKeyPress.bind(this));
  }

  handleKeyPress(e) {
    if (e.key === "ArrowRight") {
      this.bar.moveRight();
    } else if (e.key === "ArrowLeft") {
      this.bar.moveLeft();
    }
  }

  draw = () => {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // clear hình ảnh trước đó
    this.ball.drawScore(this.ctx);
    this.ball.drawBall(this.ctx); // vẽ ball
    this.ball.move(); // di chuyển ball
    this.bar.drawBar(this.ctx); // vẽ bar
    this.bar.move(this.canvas); // di chuyển bar
    // check touch
    this.ball.checkTouch(this.canvas, this.bar);
    // vẽ lại hoạt ảnh
    requestAnimationFrame(this.draw);
  };

  start() {
    this.draw();
  }
}
