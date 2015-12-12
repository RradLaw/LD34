var flower;
var RUNNINGSPEED = 3;

var bg;
//var SCENE_W=1280;
//var SCENE_H=2000;
var SCENE_W = 1600;
var SCENE_H = 800;

function setup() {
	//createCanvas(1280,720);
	createCanvas(800,400);
	flower = createSprite(600, 620);
	flower.addAnimation("floating", "assets/ghost_standing0001.png", "assets/ghost_standing0007.png");
	//flower.maxSpeed=6;
	//flower.setCollider("rectangle", 0,0, flower.width/2,flower.height/2);
    flower.addSpeed(RUNNINGSPEED,flower.rotation-90);
	
	bg = new Group();
  
	//create some background for visual reference
	for(var i=0; i<80; i++)
	{
		//create a sprite and add the 3 animations
		var cloud = createSprite(random(-width, SCENE_W+width), random(-height, SCENE_H+height));
		//cycles through rocks 0 1 2 3
		cloud.addAnimation("normal", "assets/cloud"+i%4+".png");
		bg.add(cloud);
	}
}

function draw() {
	background(135,206,250);  
	
	//set the camera position to the flower position
	camera.position.x = flower.position.x;
  camera.position.y = flower.position.y;
	
	if(flower.position.x<0) flower.position.x = 0;
	if(flower.position.x>SCENE_W) flower.position.x = SCENE_W;
	if(flower.position.y<0) flower.position.y = 0;
	if(flower.position.y>SCENE_H) flower.position.y = SCENE_H;
	
	
	if(keyDown(LEFT_ARROW)||keyDown("A")) {
		flower.rotation-=4;
	}
	if(keyDown(RIGHT_ARROW)||keyDown("D")) {
		flower.rotation+=4;
	}
	
    flower.setSpeed(flower.getSpeed(),flower.rotation-90);
	
	flower.rotation%=360;
	
  
	drawSprites(bg);
	drawSprite(flower);
}
