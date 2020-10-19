var fixedRect, movingRect;

var gameOb1, gameOb2, gameOb3, gameOb4;

function setup() {
  createCanvas(800,800);
  fixedRect = createSprite(100, 100, 20, 50);
  fixedRect.shapeColor = "green";
  fixedRect.velocityY = 3;
  movingRect = createSprite(100,700,50,20);
  movingRect.shapeColor = "pink";
  movingRect.velocityY = -3;
  
  gameOb1 = createSprite(100,500,40,40);
  gameOb1.shapeColor = "green";
  
  gameOb2 = createSprite(100,750,40,40);
  gameOb2.shapeColor = "green";

  gameOb3 = createSprite(100,300,40,40);
  gameOb3.shapeColor = "green";

  gameOb4 = createSprite(100,200,40,40);
  gameOb4.shapeColor = "green";

}

function draw() {

  //movingRect.x = mouseX;
  //movingRect.y = mouseY;
  
  if(isTouching(movingRect, fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }else {
    fixedRect.shapeColor = "pink";
    movingRect.shapeColor = "pink";
  }
 
 bounceOff(movingRect, gameOb4);

  background(0);  
  drawSprites();
}

