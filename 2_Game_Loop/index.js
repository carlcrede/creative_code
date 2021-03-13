// get canvas context
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// ready to work with canvas!
let circleX;
let circleY;

let firstBox;
let rect;

let lastTime;
let requiredElapsed = 1000 / 60; // 15 fps

const util = new Util();

// assets
// lib
// model

function setup() {
    circleX = canvas.width / 1000;
    circleY = canvas.height / 1000;
    firstBox = new EmptyBox(50, 50, 50, 50);
    rect = new Rectangle(100, 100, 50, 50);
    draw();
    message();
}

function draw(now) {
    requestAnimationFrame(draw);

    if (!lastTime) {
        lastTime = now;
    }
    const elapsedTime = now - lastTime; // elapsedTime is deltatime
    if (elapsedTime > requiredElapsed) {
        // do stuff
        ctx.fillStyle = "lightblue";

        //ctx.fillRect(0, 0, canvas.width, canvas.height);

        circleX += 1;
        circleY += 1;

        ctx.fillStyle = "red";

        /* ctx.beginPath();
        ctx.arc(circleX, circleY, 50, 0, Math.PI*2);
        ctx.fill(); */

        for (let i = 0; i <= 100; i++) {
            const color = util.randomHexColor();
            const x = util.randomNumber(0, canvas.width);
            const y = util.randomNumber(0, canvas.height);
            firstBox.draw(ctx, x, y, color);
        }
        
        //firstBox.x += 2;
        // last step
        lastTime = now;
    }

   // console.log(util.randomNumber(0, 50));

    // debugging with :  debugger;

}

function update() {
    
}

// make sure to resize canvas when resizing window
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// make sure canvas fills up the whole window on load
window.onload = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    setup();
    console.log("Hello!");
}

/* Another way using eventlistener
window.addEventListener("load", () => {
    setup();
    console.log("Hello");
})
*/
