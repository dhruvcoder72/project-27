
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5, roof, rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(400, 200, 200, 20);
  bobObject1 = new Bob(0, 200, 37);
	bobObject2 = new Bob(-40, 200, 37);
	bobObject3 = new Bob(-80, 200, 37);
	bobObject4 = new Bob(40, 200, 37);
	bobObject5 = new Bob(80, 200, 37);
  rope1 = new rope(bobObject1.body, {x:0, y:0});
  rope2 = new rope(bobObject2.body, {x:-38, y:0});
  rope3 = new rope(bobObject3.body, {x:-76, y:0});
  rope4 = new rope(bobObject4.body, {x:38, y:0});
  rope5 = new rope(bobObject5.body, {x:76, y:0});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(211, 211, 211);
  Engine.update(engine);
  
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
  Matter.Body.applyForce(bobObject3.body, bobObject3.body.position,{x:-350, y:-80})
  }
}

