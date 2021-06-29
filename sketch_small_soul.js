// Global variables
let t; 
let x; // X position
let y; // Y position

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  t = 0;
}

function draw() {
  background(0, 16);

  noStroke();
  fill(255);

  // TODO: Set the x position to incorporate the noise function
  x= width*noise(t+15);

  // TODO: Set the y position to incorporate the noise function
  y = height* noise(t + 5);

  // TODO: Draw an ellipse with the variables for x and y passed in
  ellipse(x,y,150,150);

  // TODO: Increment the t variable to control the noise amount
  t+= 0.005;
}
