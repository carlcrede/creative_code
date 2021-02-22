// get canvas context
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const canvas2 = document.getElementById("canvas2");
const context2 = canvas2.getContext("2d");
context2.translate(canvas2.width / 2, canvas2.height / 2);

const clockBgImage = new Image();
clockBgImage.src = 'clockBackground.jpg';

// ready to work with canvas!

function setup() {
}

window.onload = () => {
    context.font = '45px arial'
}

function createDigitalClock(date) {
    hours = date.getHours().toString().padStart(2, "0");
    minutes = date.getMinutes().toString().padStart(2, "0");
    seconds = date.getSeconds().toString().padStart(2, "0");
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillText(`${hours}:${minutes}:${seconds}`, 100, canvas.height / 2);
    context.fillText(`${date.getDate().toString().padStart(2, "0")}-${date.getMonth().toString().padStart(2, "0")}-${date.getFullYear()}`, 100, canvas.height / 2 + 55)
}

function addBackground() {
    context2.save();
    context2.drawImage(clockBgImage, canvas2.width / 2 * -1, canvas2.height / 2 * -1, canvas2.width, canvas2.height);
    context2.beginPath();
    context2.arc(0, 0, canvas2.height / 2 - 20, 0, 2 * Math.PI);
    context2.lineWidth = '5';
    context2.stroke();
    context2.restore();
    }

function drawHourHand(date) {
    context2.save();

    const hours = date.getHours() + date.getMinutes() / 60;
    context2.rotate(degreesToRadians(hours * 360 / 12));
    drawHand(75);

    context2.restore();
}

function drawMinuteHand(date) {
    context2.save();

    context2.fillStyle = 'black';

    const minutes = date.getMinutes() + date.getSeconds() / 60;
    context2.rotate(degreesToRadians(minutes * 6));

    drawHand(100);

    context2.restore();
}

function drawSecondHand(date) {
    context2.save();

    context2.fillStyle = 'red';

    const seconds = date.getSeconds();
    context2.rotate(degreesToRadians(seconds * 6));
    
    drawHand(150);

    context2.restore();
}

function degreesToRadians(degrees) {
    return (Math.PI / 180) * degrees;
}

function drawHand(size) {
    context2.beginPath();
    context2.moveTo(0, 0);
    context2.lineTo(-4, -10);
    context2.lineTo(0, size * -1);
    context2.lineTo(4, -10);
    context2.lineTo(0, 0);
    context2.stroke();
    context2.fill();
}

function createClock(date) {
    addBackground();
    drawHourHand(date);
    drawMinuteHand(date);
    drawSecondHand(date);
}

function clockApp() {
    const date = new Date();
    createClock(date);
    createDigitalClock(date);
}

setInterval(() => {
    clockApp();
}, 1000);

clockApp();


