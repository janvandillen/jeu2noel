"use-strict";

const main = () => {
  const buildDom = (html) => {
    const main = document.querySelector(".main");
    main.innerHTML = html;
  };
  const buildSplashScreen = () => {
    buildDom(`
      <h1>Let's save Christmas!</h1>
      <img src="https://longeatonroundtable.files.wordpress.com/2014/12/santa-help-wanted.jpg?w=640" alt="" class="logo-img" />
      <p>Use the left and right arrow to move the Santa Claus!</p>
      <button>StartGame</button>
      `);
    const startButton = document.querySelector("button");
    startButton.addEventListener("click", buildGameScreen);
  };
  const buildGameScreen = () => {
    buildDom(`
    <div id="board">
    <canvas id="canvas"></canvas>
  </div>
        `);

    const width = document.querySelector("#board").offsetWidth;
    const height = document.querySelector("#board").offsetHeight;
    const canvasElement = document.querySelector("canvas");
    canvasElement.setAttribute("width", width);
    canvasElement.setAttribute("height", height);

    const game = new Game(canvasElement);

    //  game.gameOverCallback(buildGameOver);

    game.startLoop();
    
    const setPlayerDirection = (event) => {
      const keyz = {ArrowLeft: false, ArrowRight: false};
      document.addEventListener("keydown", (e) => {
        if (e.code in keyz) {
          keyz[event.code] = true;
        }
         return this.player.x + this.player.speed
      });
      document.addEventListener("keyup", (e) => {
        if (e.code in keyz) {
          keyz[event.code] = false;
        }
        return this.player.x + this.player.speed
      });
    };
    document.addEventListener("keydown", setPlayerDirection);
  };

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
window.addEventListener("load", main);
