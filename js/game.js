"use strict";
class Game {
    constructor(canvas) {
      this.canvas = canvas;
      this.ctx = this.canvas.getContext("2d");
      this.player;
      this.snowFlakes = [];
      this.gifts= []; 
      this.GameOver = false;
    }

const setPlayerDirection = (event) => {
      if (event.code === "ArrowLeft") {
        game.player.move(-1);
      } else if (event.code === "ArrowRight") {
        game.player.move(1);
      }
    };
    
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

    function checkGameOver(){}
    function CheckGameWone(){}

  }