const CANVAS = document.querySelector('canvas');
const CTX = CANVAS.getContext('2d');

const SPRITE = document.querySelector('#sprite');
const BRICKS = document.querySelector('#bricks');

CANVAS.width = 448;
CANVAS.height = 400;

// Variables of the ball

const BALL = 3;
// Ball position
let balCenter = CANVAS.width / 2;
let ballDown = CANVAS.height -30;
// Speed of the ball
let speedX = -3;
let speedY = -3;

// Variables of the palette

const PALETTE_SENSITIVITY = 8;

const PALETTE_HEIGHT = 10;
const PALETTE_WIDTH = 50;

let paletteX = (CANVAS.width - PALETTE_WIDTH) / 2;
let paletteY = CANVAS.height - PALETTE_HEIGHT - 10;

let rightPressed = false;
let leftPressed = false;

// Variables of the bricks
const BRICKS_ROW_COUNT = 6;
const BRICKS_COLUMN_COUNT = 13;
const BRICKS_WIDTH = 32;
const BRICKS_HEIGHT = 16;
const BRICKS_PADDING = 0;
const BRICKS_OFF_SET_TOP = 80;
const BRICKS_OFF_SET_LEFT = 16;
const BRICKS_ARR = [];

const BRICKS_STATUS = {
  ACTIVE: 1,
  DESTROYED: 0
}

for (let i = 0; i < BRICKS_COLUMN_COUNT; i++) {
  BRICKS_ARR[i] = []; // We initialize with an empty array
  for (let b = 0; b < BRICKS_ROW_COUNT; b++) {
    // We calculate the position of the brick on the screen
    const BRICK_X = i * (BRICKS_WIDTH + BRICKS_PADDING) + BRICKS_OFF_SET_LEFT;
    const BRICK_Y = b * (BRICKS_HEIGHT + BRICKS_PADDING) + BRICKS_OFF_SET_TOP;
    // Assign  random color to each brick
    const RANDOM = Math.floor(Math.random() * 8);
    // SAve information about each brick
    BRICKS_ARR[i][b] = {
      x: BRICK_X,
      Y: BRICK_Y,
      status: BRICKS_STATUS.ACTIVE,
      color: RANDOM
    }
  }
}


