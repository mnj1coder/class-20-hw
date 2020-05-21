
var car,wall;
var speed,weight;

function setup() {

  createCanvas(1600,400);

  speed=random(55,90);
  weight=random(400,1500);

  car=createSprite(100,200,20,20);
  car.shapeColor="white";
  
  wall=createSprite(1000,200,10,100);
  wall.shapeColor="white";

}

function draw() {

  background(0); 

  car.velocityX=speed;

if(wall.x-car.x<=(car.width/2+wall.width/2)){
    car.velocityX=0;
    var deformation=0.5*speed*speed*weight/22500;
  }

  if(deformation>180){
  car.shapeColor=color(250,0,0);
  
  }

  if(deformation>100&&deformation<180){
    car.shapeColor=color(230,230,0);
    
  }

  if(deformation<100){
    car.shapeColor=color(0,255,0);
    
  }
  
  
  drawSprites();
}