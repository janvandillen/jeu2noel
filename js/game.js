"use strict";
class Game {
    constructor(canvas) {
      this.canvas = canvas;
      this.ctx = this.canvas.getContext("2d");
      this.player = new Player;
      this.snowFlakes = [];
      this.gifts= []; 
      this.isGameOver = false;
    }

const setPlayerDirection = (event) => {
      if (event.code === "ArrowLeft") {
        game.player.setDirection(-1);
      } else if (event.code === "ArrowRight") {
        game.player.setDirection(1);
      }
    };

function drawPlayer(){
      this.ctx.drawImage(player.x,player.y,player.width,player.height),
      this.player.image = new Image(); 
      this.playerImage.src= "https://i.pinimg.com/564x/7b/fa/a4/7bfaa42e0fc93da2b3fed34ef20e4cc9.jpg"
    }

    function checkGameOver(){}
    function CheckGameWone(){}