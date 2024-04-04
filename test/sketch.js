var canvas;
var xi = 0;
var yi = 0;

var lastX = 0;
var lastY = 0;
var lifeTime = 20;
var oldColor = [0, 0, 0];

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  
  colorMode(HSB, 100);
  var oldColor = color(random(0, 100), random(0, 100), random(0, 100));
}

function draw() {
  //background(220);
  fill(oldColor[0] + xi, oldColor[0] + yi, 100);
  stroke(oldColor[0] + xi, oldColor[0] + yi, 80);
  circle(lastX + xi, lastY + yi, lifeTime);
  xi += random(-3, 3);
  yi += random(-3, 3);
  lifeTime -= 1;
  if (lifeTime <= 0) {
    randomPoint();
  }

}

function randomPoint() {
  lastX = random(0, windowWidth);
  lastY = random(0, windowHeight);
  circle(lastX, lastY, 10);
  xi = 0;
  yi = 0;
  lifeTime = random(50, 150);

  oldColor = [random(0, 100), random(0, 100), random(0, 100)];
}

function mousePressed() {
  lastX = mouseX;
  lastY = mouseY;
  circle(mouseX, mouseY, 10);
  xi = 0;
  yi = 0;
}
