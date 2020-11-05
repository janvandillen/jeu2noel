"use strict";

class snowFlakes {
  constructor(canvas, y) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.x = this.canvas.width; //maybe I don't need as they are falling from Y 
    this.y = y;
    this.speed = 5;
    this.direction = 1;
    this.snowFlakesImage = new Image(), 
  }
    update() {
      this.y = this.y + this.direction * this.speed;
    }
  
    draw() {
      this.snowflakesImage.src = "https://i.pinimg.com/474x/0b/1a/8f/0b1a8f342eb777231fa8f4331010abcc.jpg";
      this.ctx.fillRect(this.y, this.x);
    }
  
    setDirection(direction) {
      this.direction = direction;
    }
  }

class gifts {
    constructor(canvas, y) {     
      this.canvas = canvas;
      this.ctx = this.canvas.getContext("2d");
      this.x = this.canvas.width; // maybe I don't need as they are falling from Y 
      this.y = y;
      this.speed = 5;
      this.direction = 1;
      thisGiftImage = new Image()
    }

    update() {
      this.y = this.y + this.direction * this.speed;
    }
  
    draw() {
      thisGiftImage.src = "https://www.teteamodeler.com/assets/coloriages/pixel-art-cadeau-de-nol.jpeg";
      this.ctx.fillRect(this.y, this.x);
    }
  
    setDirection(direction) {
      this.direction = direction;
    }
    }

 
