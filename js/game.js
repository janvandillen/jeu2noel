"use strict";
class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.player;
    this.snowFlakes = [];
    this.gifts = [];
    this.score = {};
    this.isGameOver = false;
  }

  startLoop() {
    this.player = new Player(this.canvas, 350);

    const loop = () => {
      if (Math.random() > 0.9987) {
        const x = Math.random() * this.canvas.width;
        this.snowFlakes.push(new SnowFlake(this.canvas, x));
      }
      if (Math.random() > 0.97) {
        const y = Math.random() * this.canvas.width;
        this.gifts.push(new Gift(this.canvas, y));
      }
      this.checkAllCollissions();
      this.updateCanvas();
      this.clearCanvas();
      this.drawCanvas();
      if (!this.isGameOver) {
        window.requestAnimationFrame(loop);
      }
    };
    window.requestAnimationFrame(loop);
  }

  drawScore(){
    this.ctx.fillText("${this.player.score}",350,400)
  }
  drawLives(){
    this.ctx.fillText("${this.player.lives}",300,400)
  }

   updateCanvas (){
    this.player.update(); 
    this.snowFlakes.forEach((snowFlake)=>{
      snowFlake.update();
    });
    this.gifts.forEach((gift)=>{
      gift.update();
    });
   }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  };

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

  checkAllCollissions() {
    this.player.checkScreen();
    this.snowFlakes.forEach((snowFlake, index) => {
        if (this.player.checkCollissions(snowFlake)) {
          this.player.loseLive(); 
          this.snowFlakes.splice(index,1);
           if(this.player.lives === 0){
            this.isGameOver = true; 
            }
          }
        });
    this.gifts.forEach((gift,index) => {
          if (this.player.checkCollissions(gift)) {
              this.player.gainScore(); 
              this.gift.splice(index,1);
          if(this.player.score >30){
              this.isGameWone = true; 
              }
          }
        });
      }
  gameOverCallback(callback) {
    this.onGameOver = callback;
  }
  gameWoneCallback(callback){
    this.onGameWone = callback; 
  }
}
