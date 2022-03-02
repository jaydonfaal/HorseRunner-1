class UI {
  constructor() {

    this.backgroundImage = "url('Stage Screens/TitleCard.png')";
    var canvas = document.getElementById("game");
    canvas.style.backgroundImage = this.backgroundImage;
    canvas.style.backgroundRepeat = "no-repeat";
    canvas.style.backgroundSize = "cover";

    this.levelNum = 1;
    this.currentLevel = new Level(this.levelNum);
    this.currentLevel.playGame();

    setTimeout(() => {
      this.initializeAnimation();
    }, 1500);

    this.gameStillPlaying = true;
    this.finished = false;
    this.collided = false;

    while (this.gameStillPlaying) {
      this.gameStillPlaying = false;
      if (this.currentLevel.checkGameState() == 1) {
        this.collided = true;
        this.currentLevel.handleCollision();
      } else if (this.currentLevel.checkGameState() == 2) {
        this.finished = true;
        if (this.currentLevel.isWinner()) {
          this.currentLevel.win();
          this.levelNum++;
          setTimeout(() => {
            this.currentLevel = new Level(levelNum);
          }, 15000);

        } else {
          this.gameStillPlaying = false;
          this.currentLevel.lose();
          setTimeout(() => {
            this();
          }, 15000);
        }

      }
    }


    draw()
    {
      var ctx = document.getElementById('game').getContext('2d');

      ctx.globalCompositeOperation = 'source-over';
      ctx.clearRect(0, 0, 1000, 1900); // clear canvas

      // Figure out what pen we wanna draw with
      ctx.fillStyle = 'rgba(0, 153, 255, 1)';
      ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)';

      ctx.save();
      ctx.lineWidth = 6;
      //this.currentLevel.display(ctx);
      ctx.restore();

      window.requestAnimationFrame(this.draw());
    }

    initializeAnimation() {
      window.requestAnimationFrame(this.draw());
    }


  }

  const ui = new UI();
