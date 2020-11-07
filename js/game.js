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
    

    function checkGameOver(){}
    function CheckGameWone(){}
  }
