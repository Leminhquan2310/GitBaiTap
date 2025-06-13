let board = new Board(1500, 800);
let ball = new Ball(board.width / 2, board.height / 2, 20, -3, -3, 3);
let bar = new Bar(500, 700, 200);

let canvas = document.getElementById("board");
let ctx = canvas.getContext("2d");

const drawGame = () => {
  // clear hình ảnh trước đó
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // vẽ ball
  ball.drawBall(ctx);
  // vẽ bar
  bar.drawBar(ctx);
  // check touch
  ball.checkTouch(canvas, bar);
  // vẽ lại hoạt ảnh
  requestAnimationFrame(drawGame);
};

drawGame();

window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    bar.moveRight();
  } else if (e.key === "ArrowLeft") {
    bar.moveLeft();
  }
});
