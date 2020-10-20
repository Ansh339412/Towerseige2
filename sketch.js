const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var stand1,stand2;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;
var polygon,slingShot;

function setup() {
  createCanvas(800,600);
  engine = Engine.create();
  world = engine.world;



  stand1=new Ground(490,300,250,10);
  stand2=new Ground(400,600,1200,10);

  block1=new Box(400,275,30,40);
  block2=new Box(430,275,30,40);
  block3=new Box(460,275,30,40);
  block4=new Box(490,275,30,40);
  block5=new Box(520,275,30,40);
  block6=new Box(550,275,30,40);
  block7=new Box(580,275,30,40);

  block8=new Box(430,235,30,40);
  block9=new Box(460,235,30,40);
  block10=new Box(490,235,30,40);
  block11=new Box(520,235,30,40);
  block12=new Box(550,235,30,40);

  block13=new Box(460,195,30,40);
  block14=new Box(490,195,30,40);
  block15=new Box(520,195,30,40);

  block16=new Box(490,155,30,40);

  polygon=new Polygon(150,100,30,6);
  
  slingShot=new SlingShot(polygon.body,{x:150,y:200})



}

function draw() {
  background(0); 
  Engine.update(engine);

  textSize(20);
  fill("white");
  text("Drag the Circle Stone and Release it ,to launch it towards the blocks",50,50);
  textSize(20);
  fill("yellow");
  text("Press SPACE to get a extra chance",200,70)

  stand1.display();
  stand2.display(); 

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  polygon.display();
  slingShot.display();


  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode===32){
      slingShot.attach(polygon.body);
  }
}