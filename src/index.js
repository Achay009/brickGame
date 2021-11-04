import Game from "./game";

var canvas = document.getElementById("gameScreen");

// console.log(canvas);
//Context for drawing to the canvas
var ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

// ctx.clearRect(0,0,800,600);
// ctx.fillStyle = 'red';

let game = new Game(GAME_WIDTH, GAME_HEIGHT);

game.start();

let lastTime = 0;

function gameLoop(timeStamp) {
  let deltaTime = timeStamp - lastTime;

  lastTime = timeStamp;
  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  game.draw(ctx);
  game.update(deltaTime);

  requestAnimationFrame(gameLoop);
}
requestAnimationFrame(gameLoop);
