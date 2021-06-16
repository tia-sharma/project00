var bg;
var girl;

function preload() {
  bg = loadImage("snow1.jpg");
}
function setup() {
  createCanvas(800,400);
  girl = createSprite(400, 200, 50, 50);
}

function draw() {
  background(bg);  
  drawSprites();
}

function key() {
  if(keyCode === 32 ){
    girl.velocity.x = girl.velocity.x+2;
  }
}