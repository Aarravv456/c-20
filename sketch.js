var a,b
function setup() {
  createCanvas(800,400);
  a=createSprite(400, 200, 50, 50);
  b=createSprite(600, 200, 80, 50);
  a.shapeColor="blue"
  b.shapeColor="yellow"
}
function draw() {
  background(0);  
  b.x=mouseX
  b.y=mouseY
  if(a.x-b.x<=a.width/2+b.width/2
    && b.x-a.x<=a.width/2+b.width/2
    && a.y-b.y<=a.height/2+b.height/2
    && b.y-a.y<=a.height/2+b.height/2){
    a.shapeColor="red"
    b.shapeColor="green"
  }
  else{
  a.shapeColor="blue"
  b.shapeColor="yellow"
  }
  drawSprites();
}
