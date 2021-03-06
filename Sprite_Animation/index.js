const SCALE = 3;
const WIDTH = 16;
const HEIGHT = 18;
const SCALED_WIDTH = SCALE * WIDTH;
const SCALED_HEIGHT = SCALE * HEIGHT;
const CYCLE_LOOP = [0, 1, 0, 2];
const FRAME_LIMIT = 12;
const MOVEMENT_SPEED = 3;
const FACING_DOWN = 0;
const FACING_UP = 1;
const FACING_LEFT = 2;
const FACING_RIGHT = 3;

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let sound;
let keyPresses = {};
let spriteSheet;
let currentLoopIndex = 0;
let frameCount = 0;
let positionX = 100;
let positionY = 100;
let currentDirection = FACING_DOWN;

/*
____________________________________________________________
//                                                            \\
// GENERAL WORKFLOW                                           //
// Update  -->  Collision detection  --> Clear  --> Draw      \\
//____________________________________________________________//

*/

window.onload = init;

window.addEventListener('keydown', (event) => {
    keyPresses[event.key] = true;
}, false);

window.addEventListener('keyup', (event) => {
    keyPresses[event.key] = false;
}, false);

// make sure to resize canvas when resizing window
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

function init() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    spriteSheet = document.getElementById('mySprite');
    sound = new Howl({
        src: ['bgmusic.mp3'],
        volume: .12
    });
    sound.play();
    // start frame request
    window.requestAnimationFrame(gameLoop);
}

function drawFrame(frameX, frameY, canvasX, canvasY) {
    // spritesheet is being split up like this: 
    // first col is standing, to others are walking (two frames)
    // row is directions (down, up, left, right)
    ctx.drawImage(spriteSheet, 
        frameX * WIDTH, frameY * HEIGHT, WIDTH, HEIGHT, 
        canvasX, canvasY, SCALED_WIDTH, SCALED_HEIGHT);
}

function moveSprite(dx, dy, direction) {
    if (positionX + dx > 0 && positionX + SCALED_WIDTH + dx < canvas.width) {
        positionX += dx;
    }
    if (positionY + dy > 0 && positionY + SCALED_HEIGHT + dy < canvas.height) {
        positionY += dy;
    }
    currentDirection = direction;
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function gameLoop() {

    clearCanvas();

    let hasMoved = false;

    // TODO: add sounds !!
    // handle user input
    if (keyPresses.w) {
        moveSprite(0, -MOVEMENT_SPEED, FACING_UP);
        hasMoved = true;
    } else if (keyPresses.s) {
        moveSprite(0, MOVEMENT_SPEED, FACING_DOWN);
        hasMoved = true;
    }
    if (keyPresses.a) {
        moveSprite(-MOVEMENT_SPEED, 0, FACING_LEFT);
        hasMoved = true;
    } else if (keyPresses.d) {
        moveSprite(MOVEMENT_SPEED, 0, FACING_RIGHT);
        hasMoved = true;
    }

    if (hasMoved) {
        frameCount++;
        if (frameCount >= FRAME_LIMIT) {
            frameCount = 0;
            currentLoopIndex++;
            if (currentLoopIndex >= CYCLE_LOOP.length) {
                currentLoopIndex = 0;
            }
        }
    }
    // make sure sprite wont get stuck in a "walking" state when user stops walking
    if (!hasMoved) {
        currentLoopIndex = 0;
    }

    // draw
    drawFrame(CYCLE_LOOP[currentLoopIndex], currentDirection, positionX, positionY);

    // request new frame
    window.requestAnimationFrame(gameLoop);
}