class Ball {
  constructor(xpos, ypos, rad) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.rad = rad;
    this.vel = createVector(random(-5, 5), random(0,5));
    //this.vel = createVector();
    this.acc = createVector(0, 0.1);
    this.pos = createVector(this.xpos, this.ypos);
    this.termV = 5;
    this.damp = 0.9;

  }
  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.vel.limit(this.termV);
  }

  move() {
    fill(255);
    circle(this.pos.x, this.pos.y, this.rad * 2);
  }
  

  bounce(other) {
    let rdis = dist(this.pos.x, this.pos.y, other.rightface.x, other.rightface.y);
    let ddis = dist(this.pos.x, this.pos.y, other.downface.x, other.downface.y);
    let udis = dist(this.pos.x, this.pos.y, other.upface.x, other.upface.y);
    let ldis = dist(this.pos.x, this.pos.y, other.leftface.x, other.leftface.y);
    if (udis <= this.rad / 2 + other.len / 2) {
      this.vel = other.u.copy().setMag(this.vel.mag() * this.damp);
      other.health--;
    } else if (ldis <= this.rad / 2 + other.len / 2) {
      this.vel = other.l.copy().setMag(this.vel.mag() * this.damp);
      other.health--;
    } else if (ddis <= this.rad / 2 + other.len / 2) {
      this.vel = other.d.copy().setMag(this.vel.mag() * this.damp);
      other.health--;
    } else if (rdis <= this.rad / 2 + other.len / 2) {
      this.vel = other.r.copy().setMag(this.vel.mag() * this.damp);
      other.health--;
    }
  }
}