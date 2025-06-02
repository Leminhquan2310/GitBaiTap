class Car {
  constructor(x, y, imgSrc) {
    this.x = x;
    this.y = y;
    this.dx = 0;
    this.dy = 0;
    this.imgSrc = imgSrc;
    this.deg = 0;
    this.score = 0;
    this.speed = 3;
  }

  changeDirection(direction) {
    switch (direction) {
      case "ArrowDown": {
        this.dx = 0;
        this.dy = this.speed;
        this.deg = 180;
        break;
      }
      case "ArrowUp": {
        this.dx = 0;
        this.dy = -this.speed;
        this.deg = 0;
        break;
      }
      case "ArrowLeft": {
        this.dx = -this.speed;
        this.dy = 0;
        this.deg = 270;
        break;
      }
      case "ArrowRight": {
        this.dx = this.speed;
        this.dy = 0;
        this.deg = 90;
        break;
      }
      default:
    }
  }

  increaseSpeed() {
    this.speed += 0.5;
    if (this.deg === 0) {
      this.dy = -this.speed;
    } else if (this.deg === 180) {
      this.dy = this.speed;
    } else if (this.deg === 90) {
      this.dx = this.speed;
    } else if (this.deg === 270) {
      this.dx = -this.speed;
    }
  }
  checkMatchThings(element) {
    const halfWidth = 25;
    const halfHeight = 50;

    let checkX, checkY;

    if (this.deg === 0) {
      checkX = [this.x - halfWidth, this.x + halfWidth];
      checkY = this.y - halfHeight;
    } else if (this.deg === 180) {
      checkX = [this.x - halfWidth, this.x + halfWidth];
      checkY = this.y + halfHeight;
    } else if (this.deg === 90) {
      checkY = [this.y - halfWidth, this.y + halfWidth];
      checkX = this.x + halfHeight;
    } else if (this.deg === 270) {
      checkY = [this.y - halfWidth, this.y + halfWidth];
      checkX = this.x - halfHeight;
    } else {
      return;
    }

    if (
      (Array.isArray(checkX)
        ? checkX.some((x) => x > element.x && x < element.x + element.edge)
        : checkX > element.x && checkX < element.x + element.edge) &&
      (Array.isArray(checkY)
        ? checkY.some((y) => y > element.y && y < element.y + element.edge)
        : checkY > element.y && checkY < element.y + element.edge)
    ) {
      return true;
    }
  }
  checkHitTheWall() {
    if (
      this.x + 50 > canvas.width + this.speed + 10 ||
      this.x - 50 < -10 - this.speed ||
      this.y + 50 > canvas.height + this.speed + 10 ||
      this.y - 50 < -10 - this.speed
    ) {
      this.endGame();
    }
  }
  endGame() {
    this.x = 500;
    this.y = 500;
    this.dx = 0;
    this.dy = 0;
    this.score = 0;
    this.speed = 1;
    alert("Game Over");
  }
}
