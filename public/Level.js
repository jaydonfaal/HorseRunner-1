


class Level {
  constructor(levelNumber) {
    this.refreshTime = 60; //fps
    this.obstaclesArray = [];
    this.horsesArray = [];
    this.backgroundImage = new Image();// Create new img element
    this.img.src = 'CompleteTrack.png'; // Set source path
    this.obstacles = [2000];
    this.levelNumber = levelNumber;
    this.player = new PlayerHorse(1,1);//temp parameters
  }

  checkGameState() {
    let playerPos = this.player.position;
    if (this.player.isJumping) {
      if (obstacles[playerPos] == true) {
          return 1;
        }
      }
      if (playerPos == 2000) {
        return 2;
      }
      return 0;

    }
  }
