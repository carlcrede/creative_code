// create a function here that says hello, call it from index.js

function message() {
    return "Hello";
}

// Create a class that is called emptybox which takes x and y coordinates in their constructor
//then call it in index.js - here you should think about where you should do that

class EmptyBox extends Rectangle {
    constructor(x, y, w, h, color) {
        super();
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    draw(ctx, x, y, color) {
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.rect(x || this.x, y || this.y, this.w, this.h);
        ctx.fill();
    }
}