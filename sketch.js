var flower;
var direction = 0;

function setup() {
	createCanvas(1280,720);
	flower = createSprite(600, 620, 50, 100);
	flower.addAnimation("floating", "assets/ghost_standing0001.png", "assets/ghost_standing0007.png");
}

function draw() {
	if(keyDown(LEFT_ARROW)||keyDown("A")) {
		flower.rotation-=4;
	}
	if(keyDown(RIGHT_ARROW)||keyDown("D")) {
		flower.rotation+=4;
	}
	
	flower.rotation%=360;
	
	background(127,127,127);  
	drawSprites();
}
