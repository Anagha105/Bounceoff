var fixedRect, object1;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

gameObject1=createSprite (100, 100, 50, 50);
gameObject2=createSprite (100, 200, 50, 50);


  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
bounceOff(movingRect, fixedRect);

gameObject2.y=World.mouseY;
gameObject2.x=World.mouseX;

if (isTouching(gameObject1, gameObject2)){
gameObject1.shapeColor= "orange";
gameObject2.shapeColor= "orange";
}

else {
gameObject1.shapeColor= "pink";
gameObject2.shapeColor= "pink";
}

  
  drawSprites();
}

