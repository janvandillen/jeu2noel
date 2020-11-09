"use strict";
class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.player;
    this.snowFlakes = [];
    this.gifts = [];
    this.isGameOver = false;
  }

  startLoop() {
    this.player = new Player(this.canvas, 350);

    const loop = () => {
      if (Math.random() > 0.97) {
        const x = Math.random() * this.canvas.width;
        this.snowFlakes.push(new SnowFlake(this.canvas, x));
      }
      if (Math.random() > 0.97) {
        const y = Math.random() * this.canvas.width;
        this.gifts.push(new Gift(this.canvas, y));
      }
      //this.player.checkCollisionSnowFlakes();
      // this.player.checkCollisionGifts();
      //this.updateCanvas();
      this.clearCanvas();
      this.drawCanvas();
      if (!this.isGameOver) {
        window.requestAnimationFrame(loop);
      }
    };
    window.requestAnimationFrame(loop);
  }
  /*  updateCanvas (){
    this.player.update(); 
    this.snowFlake.forEach((snowFlake)=>{
      snowFlake.update();
    })
    this.gift.forEach((gift)=>{
      gift.update();
    })
  }*/

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  drawCanvas() {
    this.player.drawPlayer();
    // this.drawLives()
    //this.drawScore()
    this.snowFlakes.forEach((snowFlake) => {
      snowFlake.drawSnowFlake();
    });
    this.gifts.forEach((gift) => {
      gift.drawGift();
    });
    /* drawScore(){
      this.ctx.fillText("Score = ${this.point}",350,400)
    } */
  }

  /*   checkCollisionSnowflakes() {
    this.player.checkScreen();
    this.snowFlakes.forEach(snowFlake,index) => {
      if ((this.player.x <= this.snowFlake.x)
    }
    if (this.)
    if (this.player.x <= this.snowFlakes.x) {
      
      }
      return this.lives--;
    }
  }
  checkCollisionGifts() {
    if (this.player.x <= this.gifts.x){
     return this.score++;
  } */

  checkGameOver() {}
  CheckGameWone() {}
}
