const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

function setup() {
  
   var canvas = createCanvas(900,600);
   engine = Engine.create();
   world = engine.world;   
   
   ground = new Ground(450,595,900,10);
   bin1= new Bin();
   
   paper = new Paper(400,200,50,50);
   slingshot = new SlingShot(paper.body,{x:200, y:100});
}

function draw() {
    background("white");
    Engine.update(engine);

    ground.display();
    bin1.display();  
    paper.display();
    slingshot.display();
}


function mouseDragged(){
    Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY});
  }
  
  
  function mouseReleased(){
    slingshot.fly();
  }
  
  
  function keyPressed(){
    if(keyCode===32){
  slingshot. attach(paper.body);
    }
  }