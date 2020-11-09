"use strict";

class Player {
  constructor(canvas, lives) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.x = 200;
    this.y = 100;
    this.speed = 3;
    this.lives = lives;
    this.score = 0;
    this.playerImage = new Image();
  }
  update() {
    this.x = this.x + this.direction * this.speed;
  }
  drawPlayer() {
    //this.playerImage.onload = (this.playerImage,this.x, this.y, 60, 60);
    this.playerImage.src =
      "https://i.pinimg.com/564x/7b/fa/a4/7bfaa42e0fc93da2b3fed34ef20e4cc9.jpg";
    this.ctx.drawImage(this.playerImage, this.x, this.y, 60, 60);
  }
  checkScreen() {
    if (this.x <= 0) {
      this.direction = 1;
    } else if (this.x >= this.canvas.width) {
      this.direction = -1;
    }
  }
}
