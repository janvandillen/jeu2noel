class Game {
    constructor(canvas) {
      this.canvas = canvas;
      this.ctx = this.canvas.getContext("2d");
      this.player;
      this.snowFlakes = [];
      this.gifts= []; 
      this.isGameOver = false;
    }