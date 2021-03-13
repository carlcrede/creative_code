const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

let img;
let sprite;
let frameWidth;
let frameHeight;
let numColumns = 5;
let numRows = 2;

let currentFrame = 0;

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = "blue";
    context.beginPath();
    context.arc(50, 50, 50, 0, 2 * Math.PI);
    context.fill();
}

draw();

window.addEventListener('mousemove', (event) => {
    currentFrame ++;

    let maxFrame = numColumns * numRows - 1;
    if (currentFrame > maxFrame) {
        currentFrame = 0;
    }

    let column = currentFrame % numColumns;
    let row = Math.floor(currentFrame / numColumns);

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.arc(event.clientX, event.clientY, 50, 0, 2 * Math.PI);
    context.stroke();

    context.beginPath();
    context.drawImage(sprite, column*frameWidth, row*frameHeight, frameWidth, frameHeight, event.clientX, event.clientY, frameWidth, frameHeight);
    context.stroke();
});

// make sure to resize canvas when resizing window
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// make sure canvas fills up the whole window on load
window.onload = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // may impact performance
    //context.imageSmoothingEnabled = true;
    //context.imageSmoothingQuality = 'high';
    img = document.getElementById("myImage");
    sprite = document.getElementById("mySprite");
    frameWidth = sprite.width / numColumns;
    frameHeight = sprite.height / numRows;
}