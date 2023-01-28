var Space,player,bullet,Alien1,Alien2;
var a;

function preload(){
 Space = loadImage("a.jpg")
 Railjack = loadImage("Railjack2.png")
 Alien1= loadImage("Alien Ship.png")
 Alien2=loadImage("HI.png")
 //Alien3=loadImage
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  
  a=createSprite(900,600,1000,400)
  a.addImage("img",Space)
  a.scale=3.95
  
  player=createSprite(200,600,90,90)
  player.addImage("railjack",Railjack)
  player.scale=0.3

  //create Obstace Group
  obstaclesGroup = createGroup();

}

function draw() {
  background("#BDA297");
  drawSprites()
  //image(Space,0,0,windowWidth,windowHeight)
 
 // if(keyDown("1")){
    
 // }
  
  if(keyDown("up")){
    player.y -= 5.5
  }
   if(keyDown("down")){
    player.y += 5.5
  }
  if(keyDown("left")){
    ctx.rotate(20 * Math.PI / 180);
  }
  if(keyDown("right")){
    ctx.rotate(-20 * Math.PI / 180);
  }
  //spawnObstacles();
}

/*function spawnObstacles(){
  if(frameCount % 60 == 0){
    var obstacle = createSprite(400,165,10,40)
    obstacle.VelocityX= -6
  }
  var rand = Math.round(random(1,2));
  switch(rand){
    case 1: obstacle.addImage(Alien1);
            break;
    case 2: obstacle.addImage(Alien2);
            break;
    default: break;
  }
  //assign lifetime to ships
  obstacle.lifetime = 300;

  //add each obstacle to the group
  obstaclesGroup.add(obstacle);
}*/
