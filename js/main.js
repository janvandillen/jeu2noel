"use-strict";

const main = () => {
  const buildDom = (html) => {
    const main = document.querySelector("main");
    main.innerHTML = html;
  };

  const buildSplashScreen = () => {
    const startButton = document.querySelector("button");
    startButton.addEventListener("click", buildGameScreen);
  }



  const buildGameScreen = () => {
    
    buildDom(`

    <div id="board">
    <canvas id="canvas" height="450" width="700"></canvas>
  </div>
        `);

    const width = document.querySelector(".board").offsetWidth;
    const height = document.querySelector(".board").offsetHeight;

    const canvasElement = document.querySelector("canvas");

    canvasElement.setAttribute("width", width);
    canvasElement.setAttribute("height", height);

    const game = new Game(canvasElement);
    game.gameOverCallback(buildGameOver);

    game.startLoop();

  const setPlayerDirection = (event) => {
    if (event.code === "ArrowLeft") {
      game.player.setDirection(-1);
    } else if (event.code === "ArrowRight") {
      game.player.setDirection(1);
    }
  };
  document.addEventListener("keydown", setPlayerDirection);

  const buildGameOver = () => {
    buildDom(`
            <section class="game-over">
                <h1>Game Over</h1>
                <button>Restart</button>
            </section>
        `);

    const restartButton = document.querySelector("button");
    restartButton.addEventListener("click", buildGameScreen);
  };

  buildSplashScreen();
};
};
window.addEventListener("load", main);
