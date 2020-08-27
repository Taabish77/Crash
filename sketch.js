var car,wall;
var speed,weight;

function setup() {
  createCanvas(400,400);
  car=createSprite(50, 200, 37, 20);
  wall=createSprite(320, 200, 80, 40);
speed=random(55,90);
weight=random(400,1500);
}

function draw() {
  background("0,230,255");  
  car.velocityX=speed;
  drawSprites();
  if(wall.x-car.x < (car.width+wall.width)/2) 
  { car.velocityX=0; 
    var deformation=0.5 * weight * speed* speed/22509; 
    if(deformation>180) 
    { car.shapeColor=color(255,0,0); } 
    if(deformation<180 && deformation>100) 
    { car.shapeColor=color(230,230,0); } 
    if(deformation<100) { car.shapeColor=color(0,255,0); 
    } }
}