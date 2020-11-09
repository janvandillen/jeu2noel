"use strict";

class SnowFlake {
  constructor(canvas,x) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.x = x;
    this.y = this.canvas.height;
    this.speed = 7;
    this.snowFlakeImage = new Image();
    this.direction = 1;
  }
  drawSnowFlake() {
    this.snowFlakeImage.src =
      "https://i.pinimg.com/474x/0b/1a/8f/0b1a8f342eb777231fa8f4331010abcc.jpg";
    this.ctx.drawImage(this.snowFlakeImage, this.x, this.y, 20, 20);
  }
  move() {
    this.y = this.y + this.direction * this.speed;
  }
  setDirection(direction) {
    this.direction = direction;
  }
}

class Gift {
  constructor(canvas,x) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.x = x;
    this.y = this.canvas.height;
    this.speed = 2;
    this.direction = 1;
    this.giftImage = new Image();
  }

  drawGift() {
    this.giftImage.src =
      "https://www.teteamodeler.com/assets/coloriages/pixel-art-cadeau-de-nol.jpeg";
    this.ctx.drawImage(this.giftImage, this.x, this.y, 40, 40);
  }

  move() {
    this.y = this.y + this.direction + this.speed;
  }

  setDirection(direction) {
    this.direction = direction;
  }
}
