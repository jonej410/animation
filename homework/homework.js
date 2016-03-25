/*
  Homework
*/

//declare your variables
// var ball = 0
// var speed = 18
// var spear = 0
// var ball2 = 0

var circle = {
      x: 0,
      y: 300,
      diameter: 20,
      speedA: -1,
      speedB: -6,
}


function setup(){
  createCanvas(windowWidth,windowHeight);

// background(random(255),random(255),random(255));
// fill(random(255),random(255),random(255))
// for(row = 0; row < 6; row = row+1){
//   rect(width/2,200*row,300,200);
// }

  //set things up
}

function draw(){
background("brown")
strokeWeight(5)
  fill("brown")
  ellipse(circle.x,circle.y,circle.diameter,circle.diameter);
  circle.x = circle.x + circle.speedA;
  circle.y = circle.y + circle.speedB;

  if(circle.x > width || circle.x < 0){
      circle.speedA = -circle.speedA;
  }
  if(circle.y > height || circle.y < 0){
      circle.speedB = -circle.speedB;
  }else if (mouseIsPressed){
      // background(204,229,255);
      for(var rows = 0; rows < 7; rows++){
        // frameRate(20)
        // background(0,0,0)
        stroke(2)
        fill(random(255), random(255), random(255))
        ellipse(circle.x*rows,circle.y,circle.diameter*rows,circle.diameter*rows);
        
        // circle.x = circle.x + random(-2,1);
        // circle.y = circle.y + random(-2,1);

        // circle.x = circle.x + circle.speedA;
        // circle.y = circle.y + circle.speedB
        // if(circle.x > width || circle.x < 0){
        //     circle.speedA = -circle.speedA;
        // }
        // if(circle.y > height || circle.y < 0){
        //     circle.speedB = -circle.speedB;
        // }
      }
  }

  }


  //begin
// clear()
// fill((255),(255),(255))
// ellipse(ball,ball,ball,ball)
// ellipse(ball2,height/1,ball2,ball2)
  //end



//line(spear,height/3,spear,600)


  //begin
// if(ball >= windowWidth){
//   speed = -9
// }else if(ball <= 0){
//   speed = 9
// }else if(ball > windowWidth/2){
//   background(random(255),random(255),random(255),random(4))
// }else if(mouseIsPressed){
//   background(random(255),random(255),random(255))
// }else if(line >= windowWidth){
//   speed = -9
//   for(down = 0; down < 10; down = down+1){
//     line(spear,500*down,spear,900)
    //end



//  }else if(ball2 >= windowWidth){
  //  speed = -9
//   }
// }



// ball = ball + speed
// line = line + speed
// ball2 = ball2 + speed
