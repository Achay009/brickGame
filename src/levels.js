import Brick from "./brick";

export function buildBrick(game, level) {
  let bricks = [];

  level.forEach((row, rowIndex) => {
    row.forEach((brick, brickIndex) => {
      if (brick === 1) {
        let position = {
          x: 80 * brickIndex,
          y: 50 + 20.5 * rowIndex
        };
        bricks.push(new Brick(game, position));
      }
    });
  });
  return bricks;
}

export const level1 = [
  [1, 0, 1, 1, 0, 1, 1, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];
