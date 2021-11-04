import { collisionDetection } from "./collisionDetection";

export default class Brick {
  constructor(game, position) {
    this.image = document.getElementById("brick_wall");
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.size = 35;
    // this.speed = {
    //   x: 2,
    //   y: 2
    // };
    this.position = position;
    // this.position = {
    //   x: 10,
    //   y: 10
    // };
    this.width = 80;
    this.height = 24;
    this.game = game;
    this.isHit = false;
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  update() {
    if (collisionDetection(this.game.ball, this)) {
      this.isHit = true;
      this.game.ball.speed.y = -this.game.ball.speed.y;
    }
  }
}
