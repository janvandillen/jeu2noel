"use strict";

class Player {
    constructor(canvas, lives) {
      this.canvas = canvas;
      this.ctx = this.canvas.getContext("2d");
      this.x = x;
      this.y = canvas.height;
      this.speed = 3;
      this.direction = 0;
      this.lives = lives;
      this.playerImage.src = this.playerImage;
    }

    checkScreen() {
      if (this.x <= 0) {
        this.direction = 1;
      } else if (this.x + this.size >= this.canvas.width) {
        this.direction = -1;
      }
    }


    checkCollisionSnowflakes(flakes) {
      const collideTop = this.y > flakes.y; 

      if (collideTop) {
        return true;
      }
  
      return false;
    }
  
    loseLive() {
      this.lives--;
    }
  }

  checkCollisionGifts(good) {
    const collideTop = this.y > good.x;

    if (collideTop) {
      return true;
    }

    return false;
  }

  gainPoint(){
    this.point++;
  }
}
