class Bar {
  constructor(x, y, length) {
    this.x = x;
    this.y = y;
    this.length = length;
    this.dx = 0;
  }

  move(canvas) {
    this.x += this.dx;
    if (this.x + this.length > canvas.width || this.x < 0) {
      this.dx = 0;
    }
  }

  drawBar(ctx) {
    ctx.beginPath();
    ctx.fillStyle = "#000";
    ctx.fillRect(this.x, this.y, this.length, 10);
    ctx.fill();
    ctx.closePath();
  }

  moveRight() {
    this.dx = 5;
  }

  moveLeft() {
    this.dx = -5;
  }
}
