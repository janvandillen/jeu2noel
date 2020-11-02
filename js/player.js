class Player {
    constructor(canvas, lives) {
      this.canvas = canvas;
      this.ctx = this.canvas.getContext("2d");
      this.x =  / 2;
      this.y = / 2;
      this.speed = 3;
      this.direction = 0;
      this.lives = lives;
      img.src = "https://i.pinimg.com/564x/7b/fa/a4/7bfaa42e0fc93da2b3fed34ef20e4cc9.jpg";
    }