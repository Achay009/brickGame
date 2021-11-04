import { collisionDetection } from "./collisionDetection";

export default class Ball {
  constructor(game) {
    this.image = document.getElementById("img_ball");
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.size = 35;
    this.speed = {
      x: 2,
      y: 2
    };

    this.position = {
      x: 10,
      y: 10
    };

    this.game = game;
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size,
      this.size
    );
  }

  update(dt) {
    // console.log(this.game.paddle)
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    //check for left or right
    if (this.position.x + this.size > this.gameWidth || this.position.x < 0) {
      this.speed.x = -this.speed.x;
    }

    //check for top or bottom
    if (this.position.y + this.size > this.gameHeight || this.position.y < 0) {
      this.speed.y = -this.speed.y;
    }

    //check for paddle
    // console.log(this.game.paddle.position.y)
    if (collisionDetection(this, this.game.paddle)) {
      this.speed.y = -this.speed.y;
      this.position.y = this.game.paddle.position.y - this.size;
    }
  }
}
