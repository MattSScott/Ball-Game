//consider making a square with 4 normals (more intuitive?)

class Block {
  constructor() {
    this.len = random(15, 40);
    this.pos = createVector(random(0, width), random(height / 2, height - this.len));
    //this.pos = createVector(width / 2, 300);
    this.rotation = random(-PI / 2, 0);
    //this.rotation = 0.3;

    this.r = p5.Vector.fromAngle(this.rotation, this.len / 2);
    this.l = p5.Vector.fromAngle(-this.rotation, this.len / 2);
    this.u = p5.Vector.fromAngle(this.rotation - PI / 2, this.len / 2);
    this.d = p5.Vector.fromAngle(this.rotation + PI / 2, this.len / 2);

    this.upface = this.u.copy().add(this.pos);
    this.downface = this.d.copy().add(this.pos);
    this.leftface = this.l.copy().add(this.pos);
    this.rightface = this.r.copy().add(this.pos);
    this.damp = map(this.len, 15, 30, 0.8, 1);
    this.health = floor(map(this.len, 15, 30, 1, 10));
  }

  show() {
    push();
    rectMode(CENTER);
    translate(this.pos.x, this.pos.y);
    rotate(this.rotation);
    rect(0, 0, this.len, this.len);
    stroke(0);
    fill(0);
    text(this.health, 0, 0);
    pop();
  }
}