# Santa Claus & the christmas flakes

## Description
Santa Claus & the christmas Flakes is a game where a santa needs to pick as many flakes as possible to save christmas. 
He will need to avoid 


## MVP (DOM - CANVAS)
A santa Claus is picking snow flakes dropping from the sky. he can move in line fom left to right. 
Dropping elements are snow flakes & bad elements 
? should he be able to go up or not ?  
The game is over when the player eat 3 "bad elements". 
The game is won whenever the player reaches 20 points.


## Data structure
1. index.html
2. main.js
3. game.js
4. player.js
5. obstacle.js

### 1. index.html file

### 2. Main file

- buildDom
- createStartScreen / removeStartScreen
- createGameScreen / removeGameScreen
- createGameOverScreen / removeGameOverScreen
- createWinScreen / removeWinScreen
- startGame / endGame

### 3. Game Constructor

**Properties**
- canvas
- ctx
- player
- name
- obstacles
- otherSide
- gameIsOver
- gameIsWon
- bonus
- loopCount
- timeScore
- pause

**Methods**
- start
- startLoop
- checkCollision
- checkOtherSide
- checkIfBonusWon
- checkTime
- win
- gameWon / gameOver
- printLives
- printTime

### 4. Player Constructor

**Properties**
- canvas
- ctx
- x position
- y position
- width
- height
- lives
- image
- direction

**Methods**
- draw
- move
- collidedWithObstacle
- collidedWithScreen
- catchedBonus
- removeLife
- addLife

### 5. Obstacle Constructor

**Properties**
- canvas
- ctx
- x position
- y position
- width
- height
- row
- speed
- direction
- image

**Methods**
- draw
- move

### 6. Bonus Constructor

**Properties**
- canvas
- ctx
- size
- x position
- y position
- image

**Methods**
- draw
- move


## States and States Transitions
- startScreen
  - Start the game
  - Goes to gameScreen when Start button is clicked
- gameScreen
  - Game running while lives > 0
  - Goes to gameoverScreen if lives < 0 or if time > 1min
  - Goes to winScreen if Players x position <= 40 ("the other side")
- gameoverScreen
  - Shows Game Over message and Restart button
  - Goes back to Game Screen when Restart button is clicked
- winScreen
  - Shows Win message, random quote, time score, scoreboard and Restart button
  - Goes back to Game Screen when Restart button is clicked


## Tasks
- Setup git & GitHub
- Create and connect files: main.js, player.js, obstacle.js, 
- BuildDom in main.js
- Create 4 screens in main.js
- Create screen transitions in main.js
- Create Game constructor
- Create loop in game.js
- Create Player constructor
- Create Obstacle constructor
- Draw obstacles in game.js
- Move obstacles in game.js
- Move player in game.js
- Check Collisions  in game.js
- Check game result in game.js
- Add time and print it in game.js
- Create bonus constructor and check bonus in game.js
- Create scoreboard in main.js
- Pause game in game.js
- Add audios, img and fonts


## Backlog
- Time limit (must cross in less than 1 min)
- Bonus life (extra life if eats a randomly generated corn)
- Username registration and scoreboard (to compete again other players)
- Pause game
- Sounds and visual effects (when collides, looses or wins)


## Links

### Trello
[Link url](https://trello.com/invite/b/0VjAAZ5H/f3ea8c975f1011a647c9bc726fc656af/ironhack-project-1)


### Git
[Link Repo](https://github.com/caprosset/why-did-the-chicken-cross-the-road) -
[Link Deploy](https://caprosset.github.io/why-did-the-chicken-cross-the-road/)

### Slides
URls for the project presentation (slides)
[Link Slides.com](https://docs.google.com/presentation/d/1sd0kD1USru5METruDBION3qVaVu6O19CvSCoMSgvj7E/edit?usp=sharing)