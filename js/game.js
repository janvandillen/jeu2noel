class Game {
    constructor(canvas) {
      this.canvas = canvas;
      this.ctx = this.canvas.getContext("2d");
      this.santa;
      this.snowFlakes = {};
      this.gifts= {}; 
      this.isGameOver = false;
    }

startLoop() {
    this.santa = new Santa(this.canvas, );