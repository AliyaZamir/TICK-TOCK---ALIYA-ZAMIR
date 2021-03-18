var hour;
var second;
var minute;

function setup() {
  createCanvas(800,400);
}

function draw() {
  background(255,255,255);
  
  text('Current hour:\n' + hour, 5, 50);
  text('Current minute: \n' + minute, 80, 50);
  text('Current second: \n' + second, 165, 50);
  
  sc = second();

  angleMode(DEGREES);
  map()
  scAngle = map(sc, 0, 60, 0, 360);

  stroke(250,0,0);
  strokeWeight(7);
  line(0,0,100,0);

  drawSprites();
}
