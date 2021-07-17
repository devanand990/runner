var path
var pathImg
var runner
var runImg
var coin 
var bomb

function preload(){
  pathImg = loadImage("path.png")
  runImg = loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  path = createSprite(200,200)
  path.addImage(pathImg)
  path.scale = 1.2
  path.velocityY = 4

  runner = createSprite(206,306,50,50)
  runner.addAnimation("boyrunning",runImg)
  
runner.scale = 0.05
}

function draw() {
  background(0);
  if(keyDown(RIGHT_ARROW)){
    runner.x = runner.x +4
  }
  if(keyDown(LEFT_ARROW)){
    runner.x = runner.x - 4
  }
  if(path.y > 400){
    path.y = height/2
    path.velocityY = 4
  }
drawSprites()
}
