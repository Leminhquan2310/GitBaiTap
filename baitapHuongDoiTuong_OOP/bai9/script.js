/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size) {
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;
  this.sLeft = 10;
  this.sTop = 10;
  this.speed = 10;

  this.getHeroElement = function () {
    return (
      '<img width="' +
      this.size +
      '"' +
      ' height="' +
      this.size +
      '"' +
      ' src="' +
      this.image +
      '"' +
      ' style="top: ' +
      this.top +
      "px; left:" +
      this.left +
      'px;position:absolute;" />'
    );
  };
}

var hero = new Hero("doraemon.png", 20, 20, 200);

function start() {
  document.getElementById("game").innerHTML = hero.getHeroElement();
  if (hero.left > window.innerWidth - hero.size || hero.left < 0) {
    hero.sLeft = -hero.speed;
  }

  if (hero.top > window.innerHeight - hero.size || hero.top < 0) {
    hero.sTop = -hero.speed;
  }
  hero.left += hero.sLeft;
  hero.top += hero.sTop;
  setTimeout(start, 500);
}

function increaseSpeed() {
  hero.speed += 10;
  if (hero.sLeft < 0) {
    hero.sLeft = -hero.speed;
    hero.sTop = -hero.speed;
  } else {
    hero.sLeft = hero.speed;
    hero.sTop = hero.speed;
  }
}

start();
