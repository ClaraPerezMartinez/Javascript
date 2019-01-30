let angle = 0;
function setup() {
  createCanvas(192, 157, WEBGL);
  angleMode(DEGREES);

}
function draw(){
background(0,49,83);
  push();
  fill(255, 222,173);
  scale(0.7);
  rotate(angle);
  rect(-43, 10, 35, 35);
  rect(10, 10, 35, 35);
  rect(10, -43, 35, 35);
  rect(-43, -43, 35, 35);
    pop();
  push();
  fill(0, 255, 255);
  scale(1.5);
   rotate(-angle);
  ellipse(-56, 56, 55, 55);
  ellipse(56, 56, 55, 55);
  ellipse(56, -56, 55, 55);
  ellipse(-56, -56, 55, 55);
  pop();
  push();
  fill(255, 128, 0);
  scale(0.7);
  rotate(-angle);
  push();
  rotate(90);
  rect(-100, -47, 15, 95);
  pop();
  push();
  rotate(90);
  rect(86, -47, 15, 95);
  pop();
  push();
  rotate(0);
  rect(110, -46, 15, 95);
  pop();
  push();
  rotate(0);
  rect(-126, -46, 15, 95);
  pop();
  push();
  fill(215,48,39);
  scale(1);
  rotate(angle);
  ellipse(0, 2, 55, 55);
  pop();
  angle = angle + 1;
}