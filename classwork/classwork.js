/*
  Classwork
*/
var ballX = 0;
var speed = 9;
var ballY = 0
var speed2 = 9

function setup(){
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  if(mouseIsPressed){
  fill ("pink")
  }
  background("white");
  ellipse(ballX, height/2, 50,50);
if(mouseIsPressed){
  fill ("yellow")
  }
  ellipse(width/2,ballY,50,50);

//ballX
  if (ballX >= windowWidth){
    speed = -9;
  }
    else if(ballX <= 0){
      speed = 9
  }
      if(ballY >= windowHeight){
    speed2 = -9
  }
    else if(ballY <= 0){
      speed2 = 10

    }
  ballX = ballX + speed;
  ballY = ballY + speed2;

}
