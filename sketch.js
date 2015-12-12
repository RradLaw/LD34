var flower;
var RUNNINGSPEED = 3;
var bg;

var SCENE_W = 1280;
var SCENE_H = 8000;

function setup() {
    createCanvas(1280,720);
    
    //create a sprite and add the 3 animations
    flower = createSprite(400, 200, 50, 100);
    
    //var myAnimation = flower.addAnimation("floating", "assets/ghost_standing0001.png", "assets/ghost_standing0007.png");
    var myAnimation = flower.addAnimation("floating", "assets/flowa1.png", "assets/flowa3.png");
    flower.animation.frameDelay=30;
    flower.addSpeed(RUNNINGSPEED,flower.rotation-90);
    
    bg = new Group();
    
    //create some background for visual reference
    for(var i=0; i<200; i++) {
        //create a sprite and add the 3 animations
        var cloud = createSprite(random(-width, SCENE_W+width), random(-height, SCENE_H+height));
        //cycles through clouds 0 1 2 3
        cloud.addAnimation("normal", "assets/cloud"+i%4+".png");
        bg.add(cloud);
    }
    flower.position.y=SCENE_H;
}

function draw() {
    background(135,206,250);
    
    camera.position.y = flower.position.y;
    
    if(camera.position.y<height/2) camera.position.y=height/2;
    if(camera.position.y>SCENE_H-height/2) camera.position.y=SCENE_H-height/2;

    if(flower.position.x < 0) flower.position.x = 0;
    if(flower.position.y < 0) flower.position.y = 0;
    if(flower.position.x > SCENE_W) flower.position.x = SCENE_W;
    if(flower.position.y > SCENE_H) flower.position.y = SCENE_H;


    if(keyDown(LEFT_ARROW)||keyDown("A")) flower.rotation-=4;
    if(keyDown(RIGHT_ARROW)||keyDown("D")) flower.rotation+=4;
    
    flower.setSpeed(flower.getSpeed(),flower.rotation-90);	
    flower.rotation%=360;
      
    drawSprites(bg);
    drawSprite(flower);
    
}
