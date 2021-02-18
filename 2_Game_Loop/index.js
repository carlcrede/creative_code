// get canvas context
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

// ready to work with canvas!


function setup() {
    // create a light blue background
    context.fillStyle = "lightblue";
    context.fillRect(0, 0, canvas.width, canvas.height);
}

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
