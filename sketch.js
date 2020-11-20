const Engine =  Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground,ball;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;
  
  //objectname = new Class_name(args);

  ground = new Ground(400,380,800,20)
  box1 = new Box(200,300,50,50)
  box2 = new Box(240,100,50,100)
}

function draw() {
  background(0);  
  Engine.update(engine);
 
  ground.display();
  box1.display();
  box2.display();
}