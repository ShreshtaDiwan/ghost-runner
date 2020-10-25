var tower,towerimg;
var ghost,ghostimg;
var climber,climberimg,climbergroup;
var door,doorimg,doorgroup;
var block,blockgroup;
var gamestate = "PLAY"


function preload(){
  towerimg = loadImage ("tower.png")
  ghostimg = loadImage ("ghost-standing.png")
  climberimg = loadImage ("climber.png")
  doorimg = loadImage ("door.png")
  
}

function setup(){
  createCanvas (500,500);
  tower = createSprite(250,250);
  tower.addImage(towerimg);
  tower.velocityY = 3
  
  
  ghost = createSprite(250,250);
  ghost.addImage(ghostimg);
  ghost.scale = 0.4;
  
  climbergroup = new Group();
  
  blockgroup = new Group();
    
  
}

function draw(){
  background("white");
  
  if(gamestate === "PLAY"){
    
  
  
  if(tower.y>500){
    tower.y=250;
  }
  
  if(keyDown("left")){
    ghost.x=ghost.x-3;
  }
  
  if(keyDown("right")){
    ghost.x=ghost.x+3;
  }
  
  if (keyDown("space")){
    ghost.velocityY=-7;
  }
  
  ghost.velocityY= ghost.velocityY+0.5
  
  balcony();
  
  
  
  if(ghost.isTouching(climbergroup)){
    ghost.velocityY=0;
  }
  
  if(ghost.isTouching(blockgroup)||ghost.y>500){ 
    gamestate = "END";
  }
  
  drawSprites();
    
  }
  if(gamestate === "END"){
    background("cyan");
    textSize(50)
    text("Game Over",200,250)
    
  }
}


function balcony(){
 
  if(frameCount%120===0){  
  door = createSprite(250,-3,100,100);
  door.addImage(doorimg);   
  door.velocityY=4;
  door.x=Math.round(random(50,450));
  door.lifetime = 200;
    
  climber = createSprite(door.x,40)  
  climber.addImage(climberimg) ;
  climber.velocityY=4;
  climber.lifetime = 200;
  climbergroup.add(climber);
    
  block = createSprite(door.x,55,100,5)
  block.velocityY=4;  
  blockgroup.add(block);
  block.lifetime = 200;
  
  ghost.depth=door.depth
  ghost.depth =ghost.depth+1
  }
  
  
}


