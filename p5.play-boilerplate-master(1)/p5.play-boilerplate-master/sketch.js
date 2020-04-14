var rainDrop,RandX,rainDropWidth,rainDropheight,rainDropSprite;

function preload(){
  rainDropSprite = loadImage("Sprite-0001-export.png");
}
function setup() {
  createCanvas(800,400);
}

function draw() {
  background(0,0,0); 
  RandX = Math.floor(Math.random() * 801);
  rainDropWidth = Math.floor(Math.random() * 11);
  rainDrop = createSprite(RandX,0,rainDropWidth,20);
  rainDrop.velocityY = 3;
  rainDrop.addImage(rainDropSprite);
  drawSprites();
}