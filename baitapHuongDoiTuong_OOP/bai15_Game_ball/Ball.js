class Ball {
  constructor(x, y, radius, dx, dy, speed) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;
    this.speed = speed;
  }

  drawBall(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = "red";
    ctx.fill();
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
    }
    if (this.y + this.radius >= canvas.height) {
      this.endGame();
    }
  }

  endGame() {
    this.dx = 0;
    this.dy = 0;
    alert("Game Over!");
  }
}
