"use strict";

class Player {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.x = 350;
    this.y = 520;
    this.speed = 2;
    this.lives = 3;
    this.score = 0;
    this.playerImage = new Image();
    this.direction = 0;
  }
  update() {
    this.x = this.x + this.direction * this.speed;
  }
  
  drawPlayer() {
    console.log("player",this.x)
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

  setDirection(direction){
    this.direction = direction;
  }
  loseLive() {
    this.lives--;
  }

  gainScore() {
    this.score++;
  }
}
