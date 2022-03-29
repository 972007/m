var space ,bg;
var spacecraft,spacecraftImg ;

function preload(){
space = loadImage("space.png");   
spacecraftImg = loadImage("spacecraft1.png");
}

function setup(){

createCanvas(windowWidth,windowHeight);
bg=createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight);
bg.addImage(space);
bg.scale=1.75;
spacecraft=createSprite(90,100,50,50);

spacecraft.addImage(spacecraftImg);
spacecraft.scale=0.2;
}
function draw(){
    background("black");
    
    bg.velocityX=-3;

    if(bg.x<500){
        bg.x=bg.width/2;
    }
    if(keyDown(DOWN_ARROW)){
        spacecraft.y=spacecraft.y+2;
    }

    if(keyDown(UP_ARROW)){
        spacecraft.y=spacecraft.y-2;
    }
  drawSprites();
}
