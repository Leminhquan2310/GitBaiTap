class Ball {
  constructor(x, y, radius, dx, dy) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;
    this.score = 0;
    this.countScore = setInterval(() => {
      this.score++;
    }, 3000);
  }

  drawBall(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = "red";
    ctx.fill();
  }

  drawScore(ctx) {
    ctx.font = "20px Arial";
    ctx.fillText("Score: " + this.score, 20, 30);
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;
  }

  checkTouch(canvas, bar) {
    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (
      this.y - this.radius < 0 ||
      (this.y + this.radius > bar.y &&
        this.y + this.radius < bar.y + 10 &&
        this.x > bar.x &&
        this.x < bar.x + bar.length)
    ) {
      this.dy = -this.dy;
      if (bar.dx > 0) {
        this.dx += 1;
      } else if (bar.dx < 0) {
        this.dx -= 1;
      }
    }
    if (this.y + this.radius >= canvas.height) {
      this.endGame();
    }
  }

  endGame() {
    this.dx = 0;
    this.dy = 0;
    clearInterval(this.countScore);
    let isConfirm = confirm("Game Over! Your score: " + this.score + " Do u want try again?!");
    if (isConfirm) {
      this.score = 0;
      this.x = Math.floor(Math.random() * 500);
      this.y = Math.floor(Math.random() * 500);
      this.dx = 3;
      this.dy = 3;
      this.countScore = setInterval(() => {
        this.score++;
      }, 3000);
    }
  }
}
