![Christmas](https://c8.alamy.com/compfr/dnm0cx/retro-8-bit-style-jeu-video-arcade-pixel-art-noel-le-pere-noel-en-traineau-avec-merry-xmas-message-dnm0cx.jpg)

# Santa Claus & the christmas flakes

## Description
Let's save Christmas is a game where a santa needs to catch as many  gifts as possible in order to save christmas. 
The gifts, and the snow flakes are dropping from the sky. 
The task is not as easy as it seems, he will need to avoid the dropping snow flakes. 
If other level are created, the santa clause will have to avoid element at his level. 



## MVP (DOM - CANVAS)
A santa Claus is picking gifts dropping from the sky. he can move in line fom left to right. 
Dropping elements are snow flakes &  gifts.  
The game is over when the player eat 3 "snow flakes". 
The game is won whenever the player reaches 20 points.


## Data structure
1. index.html
2. main.js
3. game.js
4. player.js
5. elements.js
6. style.css

### 1. index.html file

### 2. Main file

- createStartScreen / removeStartScreen
- createGameScreen / removeGameScreen
- createGameOverScreen / removeGameOverScreen 
- createWinScreen / removeWinScreen
- startGame / endGame
(Create the "go to next level" screen)

### 3. Game Constructor

**Properties**
- canvas
- ctx
- player
- name
- elements
- otherSide
- gameIsOver
- gameIsWon
- loopCount
- timeScore
- pause

**Methods**
- start
- startLoop
- checkCatch
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
- CatchElement
- collidedWithScreen
- removeLife
- addLife

### 5. Bad Element

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


## States and States Transitions
- startScreen
  - Start the game
  - Goes to gameScreen when Start button is clicked
- gameScreen
  - Game running while lives > 0
  - Goes to gameoverScreen if lives < 0 
  - Goes to winScreen if Players player points >=20
- gameoverScreen
  - Shows Game Over message and Restart button
  - Goes back to Game Screen when Restart button is clicked
- winScreen
  - Shows Win message, random quote, time score, scoreboard and Restart button
  - Goes back to Game Screen when Restart button is clicked


## Tasks
- Setup git & GitHub
- Create and connect files: main.js, game.js, elements.js, style.css, index.html
- BuildDom in main.js
- Create 4 screens in main.js
- Create screen transitions in main.js
- Create Game constructor
- Create loop in game.js
- Create Santa Claus constructor
- Create Gifts constructor
- Create Snow Flakes constructor
- Set elements in game.js 
- Move elements in game.js
- Move player in game.js
- Check Catch  in game.js
- Check game result in game.js
- Add time and print it in game.js
- Create scoreboard in main.js
- Add audios, img and fonts
- Create css 
- Create hTML


## Backlog
- Time limit (needs to reach 20 points in less than 3 min) - if time 
- Bonus life 
- Add nivel
- Username registration and scoreboard (to compete again other players)
- Sounds and visual effects (christmas music)


## Links

### Trello
[Link url](https://trello.com/invite/b/8d624hdI/0e381148f46cdce4c8ff95761e20fabc/ironhack)

### Miro
[Link url](https://miro.com/app/board/o9J_kgxH-zE=/)


### Git
[Link Repo](https://github.com/Luciemzt/jeu2noel) -
[Link Deploy]()

### Slides
URls for the project presentation (slides)
[Link Slides.com](https://slides.com/luciepani/jeu2noel/fullscreen)