var fixedRect, movingRect;

var game1, game2, game3, game4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  game1 = createSprite(200,200,30,30)
  game1.shapeColor = "blue"

  game2 = createSprite(200,400,30,30)
  game2.shapeColor = "blue"

  game3 = createSprite(200,600,30,30)
  game3.shapeColor = "blue"

  game4 = createSprite(200,100,30,30)
  game4.shapeColor = "blue"
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(istouching(game2,movingRect))
  {
    movingRect.shapeColor = "green"
    game2.shapeColor = "green"
  }

  else {
    movingRect.shapeColor = "blue"
    game2.shapeColor = "blue"
  }

  
  drawSprites();
}

function istouching(obj1,obj2)
{

  if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
    && obj2.x - obj1.x < obj2.width/2 + obj1.width/2
    && obj1.y - obj2.y < obj2.height/2 + obj1.height/2
    && obj2.y - obj1.y < obj2.height/2 + obj1.height/2) {
     
      return true;
}
else {
  return false;
}


}

