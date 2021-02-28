var bullet,wall,thiknes;
var speed,weight;


function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thiknes=random(23,83);
  wall=createSprite(1200,200,thiknes,height/2)
  bullet=createSprite(50,200,30,3);
  bullet.shapeColor=("white");
  bullet.velocityX=speed;
}

function draw() {
  background(0); 

if(hasCollided(bullet,wall))
{
  bullet.velocityX=0;
  var damage = weight*speed*speed/(thiknes*thiknes*thiknes);
  if(damage>12)
  {
    wall.shapeColor = color(255,0,0);
  }

  if(damage<12)
  {
    wall.shapeColor = color(0,255,0);
  }
}

  drawSprites();
  function hasCollided(bullet,wall)
  {
bulletRightEdge=bullet.x +bullet.width;
wallLeftEdge=wall.x;
if(bulletRightEdge>=wallLeftEdge)
{
return true
}
return false;
 }
}