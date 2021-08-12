var  path
var pathImg 
var boy
var boyImg
var leftBoundary, rightBoundary
var edges
function preload(){
  //pre-load images
  pathImg = loadImage("path.png")
  boyImg = loadImage("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200)
  path.addImage("path",pathImg)
  path.velocityY = 4
  path.scale=1.2
  boy  = createSprite(350,350,30,20)
  boy.addImage("running",boyImg)
  boy.scale= 0.1
  leftBoundary = createSprite(0,0,100,800)
  rightBoundary = createSprite(400,0,100,800) 
  leftBoundary.visible = false
  rightBoundary.visible= false
  
}

function draw() {
  background(0);
  if(path.y > 400) {
 path.y = height/2
  }
  edges = createEdgeSprites()
boy.x = World.mouseX
boy.collide(edges)
boy.collide(leftBoundary)
boy.collide(rightBoundary)
drawSprites()
}
