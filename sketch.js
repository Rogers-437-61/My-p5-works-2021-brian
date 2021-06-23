// Global variables
let circleX = 300;
let circleY = 0;
let xSpeed = 1;
let ySpeed = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  // Bouncing ball
  ellipse(circleX, circleY, 120);
  
  // TODO: Increment the x position of the ball
  circleX += xSpeed;

  // TODO: Increment the y position of the ball
  circleY += ySpeed;

  // TODO: If statment to inverse direction when ball hits left or right edge
if(circleX < 0 || circleX >width){
  xSpeed *= -1;
}

  // TODO: If statment to inverse direction when ball hits top or bottom edge
if(circleY < 0 || circleY > height){
  ySpeed *= -1;
}
}
