import Paddle from "./paddle";
import InputHandler from "./input";
import Ball from "./ball";
import { level1, buildBrick } from "./levels";

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameHeight = gameHeight;
    this.gameWidth = gameWidth;
  }

  start() {
    this.ball = new Ball(this);
    // //context parameters are in (x-cord,y-cord,width,height)
    // ctx.fillRect(407,400,100,100);

    this.paddle = new Paddle(this);

    this.bricks = buildBrick(this, level1);

    this.gameObjects = [this.ball, this.paddle, ...this.bricks];
    new InputHandler(this.paddle);
  }

  draw(ctx) {
    this.gameObjects.forEach(object => {
      object.draw(ctx);
    });
  }

  update(deltaTime) {
    this.gameObjects.forEach(object => {
      object.update(deltaTime);
    });
    this.gameObjects = this.gameObjects.filter(object => !object.isHit);
  }
}
