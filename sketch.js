var flower;
var RUNNINGSPEED = 3;
var bg;

var vine;

var SCENE_W = 1280;
var SCENE_H = 8000;

var prevX=0,prevY=0;

function setup() {
    createCanvas(1280,720);
    
    flower = createSprite(400, 200, 50, 100);
    var myAnimation = flower.addAnimation("floating", "assets/flowa1.png", "assets/flowa3.png");
    flower.animation.frameDelay=30;
    flower.addSpeed(RUNNINGSPEED,flower.rotation-90);
    
    vine = new Group();
    
    bg = new Group();
    for(var i=0; i<200; i++) {
        var cloud = createSprite(random(-width, SCENE_W+width), random(-height, SCENE_H+height));
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
    
    if(flower.position.x>prevX+10 || flower.position.x<prevX-10 || flower.position.y>prevY+10 || flower.position.y<prevY-10) {
        prevX=flower.position.x;
        prevY=flower.position.y;
        var gr = createSprite(flower.position.x,flower.position.y,25,25);
        gr.addAnimation("normal", "assets/vine"+Math.floor(Math.random()*9)+".png");
        gr.rotation=flower.rotation;
        vine.add(gr);
    }
    
    drawSprites(bg);
    drawSprites(vine);
    drawSprite(flower);
    
}
