"use strict";

class SnowFlakes {
  constructor(canvas, y) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.x = Math.floor(Math.random()*this.canvas.width);
    this.y = 0;
    this.speed = 5;
    this.snowFlakesImage = new Image(), 
  }
      
    drawSnowFlakes() {
      this.snowflakesImage.src = "https://i.pinimg.com/474x/0b/1a/8f/0b1a8f342eb777231fa8f4331010abcc.jpg";
      this.ctx.drawImage(this.snowflakesImage,this.x, this.y, 40, 40);
    }
  
    move() {
     this.y = this.y + this.speed;
    }
  }

class Gifts {
    constructor(canvas, y) {     
      this.canvas = canvas;
      this.ctx = this.canvas.getContext("2d");
      this.x =  Math.floor(Math.random()*this.canvas.width);
      this.y = 0;
      this.speed = 5;
      this.direction = 1;
      this.giftImage = new Image()
      this 
    }
  
    drawGifts() {
      thisGiftImage.src = "https://www.teteamodeler.com/assets/coloriages/pixel-art-cadeau-de-nol.jpeg";
      this.ctx.drawImage(this.giftImage,this.x, this.y, 40, 40);
    }
  
    move() {
      this.y = this.y + this.speed;
     }
    }

