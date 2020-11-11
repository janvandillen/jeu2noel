"use strict";
class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.player;
    this.snowFlakes = [];
    this.gifts = [];
    this.score = [];
    this.lives = [];
    this.isGameOver = false;
}

  startLoop() {
    this.player = new Player(this.canvas);

    const loop = () => {
      if (Math.random() > 0.98) {
        const x = Math.random() * this.canvas.width;
        this.snowFlakes.push(new SnowFlake(this.canvas, x));
      }
      if (Math.random() > 0.99) {
        const x = Math.random() * this.canvas.width;
        this.gifts.push(new Gift(this.canvas, x));
      }
      this.checkAllCollisions();
      this.clearCanvas();
      this.updateCanvas();
      this.drawCanvas();
      //console.log(this.player.lives, "player", this.player.x, this.player.y);
      if (!this.isGameOver) {
        window.requestAnimationFrame(loop);
      }
    };
    window.requestAnimationFrame(loop);
  }
  drawScore() {
    this.ctx.font = "16px Arial";
    this.ctx.fillStyle = 'white';
    this.ctx.fillText("${this.player.score}", 10, 20);
  }
  drawLives() {
    this.ctx.font = "16px Arial";
    this.ctx.fillStyle = 'white';
    this.ctx.fillText("${this.player.lives}", 10, 40);
  }

  updateCanvas() {
    this.player.update();
    this.snowFlakes.forEach((snowFlake) => {
      snowFlake.move();
    });
    this.gifts.forEach((gift) => {
      gift.move();
    });
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  drawCanvas() {
    this.player.drawPlayer();
    this.drawLives();
    this.drawScore();
    this.snowFlakes.forEach((snowFlake) => {
      snowFlake.drawSnowFlake();
    });
    this.gifts.forEach((gift) => {
      gift.drawGift();
    });
  }
  checkCollisionWithSnowFlakes(snowFlake) {
    if (this.snowFlakes.x > this.x) {
      return true;
    }
    return false;
  }
  checkCollisionWithGift(gift) {
    if (this.gifts.x > this.x) {
      return true;
    }
    return false;
  }
  checkAllCollisions() {
    this.player.checkScreen();
    this.snowFlakes.forEach((snowFlake, index) => {
      if (this.checkCollisionWithSnowFlakes(snowFlake)) {
        this.player.loseLive();
        this.snowFlakes.splice(index, 1);
        if (this.player.lives === 0) {
          this.isGameOver = true;
          this.onGameOver();
        }
      }
    });
    this.gifts.forEach((gift, index) => {
      if (this.checkCollisionWithGift(gift)) {
        this.player.score++;
        this.gifts.splice(index, 1);
        if (this.player.score >= 10) {
          this.isGameWone = true;
          this.onGameWone()
        }
      }
    });
  }
  gameOverCallback(callback) {
    this.onGameOver = callback;
  }
}
