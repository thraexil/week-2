
let sun = -60;
let timerc = 0
let wolk1 = 900
let wolk2 = 850
let wolk3 = -200
let wolk4 = -50
let carx1 = -51
let carx2 = -51


function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(160, 220, 255);

  noStroke();

  fill("#E3FFFF")
  circle(wolk2, 160, 50)
  circle(wolk2, 170, 50)
  circle(wolk2 + 20, 170, 50)
  circle(wolk2 - 20, 170, 50)

  fill("#E3FFFF")
  circle(wolk4, 90, 50)
  circle(wolk4, 100, 50)
  circle(wolk4 + 20, 100, 50)
  circle(wolk4 - 20, 100, 50)

  fill("yellow")
  circle(sun, 50, 50)
  fill(255, 198, 0, 80)
  circle(sun, 50, 65)
  fill(255, 180, 0, 70)
  circle(sun, 50, 80)
  fill(255, 210, 0, 40)
  circle(sun, 50, 100)

  sun = sun + 0.5

  if(sun > 1100){
    sun = -60
  }

  wolk1 = wolk1 - 0.3
  wolk2 = wolk2 - 0.5
  wolk3 = wolk3 + 0.7
  wolk4 = wolk4 + 0.9

  if(wolk1 < -50){
    wolk1 = 900
  }
    if(wolk2 < -50){
    wolk2 = 850
  }
    if(wolk3 > 900){
    wolk3 = -200
  }
    if(wolk4 > 900){
    wolk4 = -50
  }

  //grass

  fill(0, 130, 20);
  rect(0, 330, 800, 70);

  //mountain
  fill(115, 115, 115);
  triangle(300, 175, 425, 350, 150, 350);

  fill(130, 130, 130);
  triangle(350, 195, 455, 350, 180, 350);

  fill(140, 140, 140);
  triangle(270, 245, 405, 360, 200, 370);

  //grass
  fill(0, 130, 20);
  rect(0, 500, 800, 100);

  //buildings
  fill("#C2C2C2");
  rect(30, 30, 100, 350);
   fill("#B3B3B3")
  quad(130, 30, 140, 35, 140, 375, 130, 380)
  fill("#EBFFFF");

  for (let y = 0; y < 13; y++) {

    for (let x = 0; x < 4; x++) {
      rect(40 + x * 22, 40 + y*22, 15, 15);
    }

  }

  fill("#C2C2C2");
  rect(160, 30, 100, 350);
  fill("#B3B3B3")
  quad(260, 30, 270, 35, 270, 375, 260, 380)
  fill("#EBFFFF")

    for (let y = 0; y < 13; y++) {

    for (let x = 0; x < 4; x++) {
      rect(170 + x * 22, 40 + y*22, 15, 15);
    }

  }

  //houses
  fill("#503a3a")
  rect(700, 325, 30)
  fill("#341515")
  triangle(715, 310, 735, 325, 695, 325)

  fill("#734343")
  rect(675, 330, 30)
  fill("#602b2b")
  triangle(690, 315, 710, 330, 670, 330)

  fill("#4d2323")
  rect(650, 335, 30)
  fill("#0f0303")
  triangle(665, 320, 685, 335, 645, 335)

   noStroke();
  fill("#7A561A")
  rect(250, 340, 15, 50)
  fill("#1E5205")
  circle(257.5, 340, 40)
   fill("#246106")
   circle(263, 344, 40)
   fill("#2F7007")
    circle(252, 344, 40)

   noStroke();
  fill("#7A561A")
  rect(390, 340, 15, 50)
  fill("#1E5205")
  circle(397.5, 340, 40)
   fill("#246106")
   circle(403, 344, 40)
   fill("#2F7007")
    circle(392, 344, 40)

  //road
  fill(85, 85, 85);
  rect(0, 400, 800, 100);

  //lines
  fill(210, 210, 210);
  rect(-5, 445, 50, 10, 2);

  fill(250, 250, 250);
  rect(75, 445, 50, 10, 2);

  fill(250, 250, 250);
  rect(155, 445, 50, 10, 2);

  fill(250, 250, 250);
  rect(235, 445, 50, 10, 2);

  fill(250, 250, 250);
  rect(315, 445, 50, 10, 2);

  fill(250, 250, 250);
  rect(395, 445, 50, 10, 2);

  fill(250, 250, 250);
  rect(475, 445, 50, 10, 2);

  fill(250, 250, 250);
  rect(555, 445, 50, 10, 2);

  fill(250, 250, 250);
  rect(635, 445, 50, 10, 2);

  fill(250, 250, 250);
  rect(715, 445, 50, 10, 2);

  fill(250, 250, 250);
  rect(795, 445, 50, 10, 2);

  text("timer:" + timerc, 10, 20)

    fill("red")
  rect(carx1, 440, 50, 25)
  rect(carx1 + 50, 450, 15, 15)
  fill("black")
  circle(carx1 + 6, 470, 20)
  circle(carx1 + 45, 470, 20)

  fill("blue")
  rect(carx2, 400, 50, 25)
  rect(carx2 + 50, 410, 15, 15)
  fill("black")
  circle(carx2 + 6, 430, 20)
  circle(carx2 + 45, 430, 20)




  if(carx1 > 1000){
    carx1 = -51
  }

    if(carx2 > 1000){
    carx2 = -51
  }
   noStroke();
  fill("#7A561A")
  rect(350, 470, 15, 50)
  fill("#1E5205")
  circle(357.5, 470, 40)
   fill("#246106")
   circle(363, 474, 40)
   fill("#2F7007")
    circle(352, 474, 40)

  fill("#E3FFFF")
  circle(wolk3, 160, 50)
  circle(wolk3, 170, 50)
  circle(wolk3 + 20, 170, 50)
  circle(wolk3 - 20, 170, 50)

  fill("#E3FFFF")
  circle(wolk1, 90, 50)
  circle(wolk1, 100, 50)
  circle(wolk1 + 20, 100, 50)
  circle(wolk1 - 20, 100, 50)

//stoplicht
fill('#060606');
rect(600, 430, 10, 70);
rect(590, 370, 30, 100)
 
 
if (timerc > 300) {
 fill('red');
 circle(605, 385, 20);
}
 
 
if (timerc > 200 && timerc < 300) {
  fill("yellow");
  circle(605, 415, 20);
  carx1 = carx1 + 1
  carx2 = carx2 + 1
}
 if (timerc < 200) {
  fill("green")
  circle(605, 450, 20);
  carx1 = carx1 + 5
  carx2 = carx2 + 2
}
 
if (timerc > 500) {
  timerc = 0;
}

 text( timerc, 0, 0);
timerc = timerc + 1

}
