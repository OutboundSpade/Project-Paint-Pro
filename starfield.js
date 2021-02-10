//ALL HAIL LUIS!

let speed = 15;
class Star {
    constructor() {
        this.x = random(0, width);
        this.y = random(0, height);
        this.z = random(width);
        this.pz = this.z;
    }
    update() {
        // this.z += this.speed;
        this.z = this.z - speed;
        if (this.z < 1) {
            this.z = width;
            this.x = random(-width, width);
            this.y = random(-height, height);
            this.pz = this.z;
        }
    }
    show() {
        push();
        translate(width / 2, height / 2);
        fill(0);
        noStroke();

        var sx = map(this.x / this.z, 0, 1, 0, width);
        var sy = map(this.y / this.z, 0, 1, 0, height);

        var r = map(this.z, 0, width, 16, 0);
        ellipse(sx, sy, r, r);

        var px = map(this.x / this.pz, 0, 1, 0, width);
        var py = map(this.y / this.pz, 0, 1, 0, height);

        this.pz = this.z;

        stroke(0);
        line(px, py, sx, sy);
        pop();
    }

}

let canvas;

let starField = [];
let numberOfStars = 0;

if (EnableStarField) {
    function setup() {
        canvas = createCanvas(windowWidth, windowHeight);
        canvas.parent("canvas-wrap");
        canvas.style('margin', 'auto');

        for (let i = 0; i < numberOfStars; i++) {
            starField[i] = new Star();
        }
        // console.log();
    }

    function draw() {
        background(255);
        for (let star of starField) {
            star.update();
            star.show();
        }
        // fill(255);
        // ellipse(mouseX, mouseY, 50);
    }

    function windowResized() {
        resizeCanvas(windowWidth, windowHeight);
    }
}