"use-strict";

const main = () => {
  const buildDom = (html) => {
    const main = document.querySelector("main");
    main.innerHTML = html;
  };


  function createStartScreen (){
    StartScreen 
  }

  const setPlayerDirection = (event) => {
    if (event.code === "ArrowLeft") {
      game.player.setDirection(-1);
    } else if (event.code === "ArrowRight") {
      game.player.setDirection(1);
    }
  };