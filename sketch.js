
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var UFO, UFOImage;
var boy, boyImage;
var girl, girlImage;

function preload()
{
	UFOImage = loadImage("UFO.png");
	boyImage = loadImage("Boy1.png");
	girlImage = loadImage("Girl1.png");
	boy2Image = loadImage("Boy2.png");
	girl2Image = loadImage("Girl2.png");
}

function setup() {
	createCanvas(windowWidth,windowHeight);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	Engine.run(engine);

	UFO = createSprite(400,110);
	UFO.addImage("UFOImage",UFOImage);
	UFO.scale = 0.09;

	
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 if(keyDown("right")){
	UFO.velocityX = 5;
 }
 if(keyDown("left")){
	UFO.velocityX = -5;
 }
  drawSprites();
 
}

function flyingBoy(){
	boy = createSprite(400,windowHeight - 20);
	boy.addImage("boyImage",boyImage);
	boy.scale = 0.3;
}
function flyingGirl(){
	girl = createSprite(500,windowHeight - 20);
	girl.addImage("boyImage",girlImage);
	girl.scale = 0.3;
}


