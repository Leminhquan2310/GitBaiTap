let canvas = document.getElementById("map");
let ctx = canvas.getContext("2d");
let car = new Car(
  canvas.width / 2 + 100,
  canvas.height / 2 + 100,
  "./image/car.png"
);
let img = new Image();
img.src = car.imgSrc;

img.onload = function () {
  requestAnimationFrame(displayCar);
};

function drawCar() {
  ctx.save();
  ctx.translate(car.x, car.y);
  ctx.rotate((car.deg * Math.PI) / 180);
  ctx.drawImage(img, -25, -50, 50, 100);
  ctx.restore();
  car.x += car.dx;
  car.y += car.dy;
}

function checkGetPoint() {
  if (car.checkMatchThings(fruit)) {
    car.score += 1;
    document.getElementById("score").innerHTML = car.score;
    car.speed += 0.2;
    imageFruit.src = randomFruit();
    let XYEdgeFruit = getRandomXYEdge();
    fruit.x = XYEdgeFruit.x;
    fruit.y = XYEdgeFruit.y;
  }
}

function checkEndGame() {
  for (const element of rectangles) {
    if (car.checkMatchThings(element)) {
      car.endGame();
    }
  }
}

let fruits = ["apple.png", "cam.png", "dua.png"];
let imageFruit = new Image();

imageFruit.src = randomFruit();
let XYEdgeFruit = getRandomXYEdge();
let fruit = new Fruit(XYEdgeFruit.x, XYEdgeFruit.y);

function randomFruit() {
  let index = Math.floor(Math.random() * 3);
  return "./image/" + fruits[index];
}

function drawFruit() {
  ctx.drawImage(imageFruit, fruit.x, fruit.y, 45, 45);
}

function getRandomXYEdge() {
  let x = Math.floor(Math.random() * (canvas.width - 100) + 50);
  let y = Math.floor(Math.random() * (canvas.height - 100) + 50);
  let edge = Math.floor(Math.random() * 30 + 50);
  return { x, y, edge };
}

function getPropRect() {
  let arr = [];
  for (let i = 0; i < 5; i++) {
    arr.push(getRandomXYEdge());
  }
  return arr;
}
let rectangles = getPropRect();

// hàm vẽ chướng ngại vật
function drawObstacle() {
  for (let i = 0; i < 5; i++) {
    ctx.fillStyle = "black";
    ctx.fillRect(
      rectangles[i].x,
      rectangles[i].y,
      rectangles[i].edge,
      rectangles[i].edge
    );
  }
}

function displayCar() {
  ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
  drawObstacle();
  drawCar();
  checkEndGame();
  drawFruit();
  checkGetPoint();
  car.checkHitTheWall();
  requestAnimationFrame(displayCar);
}

window.addEventListener("keydown", function (e) {
  switch (e.key) {
    case "ArrowDown": {
      car.changeDirection(e.key);
      break;
    }
    case "ArrowUp": {
      car.changeDirection(e.key);
      break;
    }
    case "ArrowLeft": {
      car.changeDirection(e.key);
      break;
    }
    case "ArrowRight": {
      car.changeDirection(e.key);
      break;
    }
    case "Control": {
      car.increaseSpeed();
      break;
    }
    default:
  }
});
