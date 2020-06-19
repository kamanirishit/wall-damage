var wall,bullet,speed,thickness,weight

function setup() {
  createCanvas(1600, 400);
  wall=createSprite(1450,200,thickness,400);
  bullet=createSprite(100,200,50,10);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
 
}

function draw() {
  background(220);
  stop(bullet,wall);
  if(keyDown("space")){
    bullet.velocityX=speed;
  }
  if(stop(bullet,wall)){
    var damage=Math.round((weight*speed*speed)/(thickness*thickness*thickness));
    textSize(70);
    text("Damage:"+damage,200,200);
    if(damage<=10){
      wall.shapeColor="green";
    }
    if(damage>10){
      wall.shapeColor="red ";
    }
  }
  drawSprites();
}
function stop(object1,object2){
    if(object2.x-object1.x<=object1.width/2+object2.width/2){
        object1.velocityX=object1.velocityX*0;
        object1.x=object2.x-(object1.width/2+object2.width/2);
        return true;
         }
    }