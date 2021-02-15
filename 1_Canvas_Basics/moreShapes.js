
// get the canvas context
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d"); 

// show Score: 0 in upper right corner

context.font = '50px serif';
let score = 0;
draw();

// log key presses for "W A S D"
const chars = 'wasd';
window.addEventListener('keydown', ({key}) => {
    if (chars.indexOf(key.toLowerCase()) != -1) {
        console.log(key);
        score++;
        draw();
    }
});

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "blue";
    context.fillText(`Score: ${score}`, canvas.width * 0.7, 60);

    // draw a circle

    //context.beginPath();
    context.beginPath();
    context.arc(canvas.width/2, canvas.height/2, 100, 0, 2 * Math.PI);
    context.stroke();


    // create a line
    context.beginPath();
    context.moveTo(50,50);
    context.lineTo(100,100);
    context.lineWidth = 20;
    context.closePath();
    context.stroke();

    // create a triangle
    context.beginPath();
    context.lineWidth = 10;
    const startX = canvas.width / 2;
    context.moveTo(startX, 50);
    context.lineTo(startX - 100, 150);
    context.lineTo(startX + 200, 150);
    context.fillStyle = "blue";
    context.fill();

}