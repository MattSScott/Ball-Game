let blocks = [];
let balls = [];
var totalblocks;

function setup() {
  createCanvas(600, 600);
  totalblocks = 20;
  balls.push(new Ball(width / 2, 0, 10));
  for (let i = 0; i < totalblocks; i++) {
    blocks.push(new Block());
  }
}

function mousePressed(){
  balls.push(new Ball(width / 2, 0, 10));
}

function draw() {
  background(0);
  for (let i = 0; i < balls.length; i++) {
    balls[i].move();
    balls[i].update();
  }
  for (let i = 0; i < balls.length; i++) {
    for (let j = blocks.length - 1; j > 0; j--) {
      blocks[j].show();
      balls[i].bounce(blocks[j]);
      if (blocks[j].health <= 0) {
        blocks.splice(j, 1);
      }
    }
  }
}