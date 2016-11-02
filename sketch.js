var hourColor = "#ff6666";
var minuteColor = "#009999";

function drawSecond() {
  strokeWeight(2.5);
  line(15,0,-130,0);
  ellipse(0,0,10,10);
}

function drawMinute() {
  strokeWeight(2.5);
  stroke(minuteColor);
  noFill();
  beginShape();
    vertex(105,-105);
    vertex(105,105);
    vertex(-105,105);
    vertex(-105,-105);
    vertex(-7,-105);
    vertex(-7,-21);
    vertex(7,-21);
    vertex(7,-105);
    vertex(105,-105);
  endShape();
}

function drawHour() {
  strokeWeight(2.5);
  stroke(hourColor);
  noFill();
  beginShape();
    vertex(98,-98);
    vertex(98,98);
    vertex(-98,98);
    vertex(-98,-98);
    vertex(-7,-98);
    vertex(-7,-38);
    vertex(7,-38);
    vertex(7,-98);
    vertex(98,-98);
  endShape();
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
}

function draw() {
var h=hour();
var m=minute();
var s=second();

  translate(width/2,height/2);
  
  if (h>=20 || h<=8 ) {
  background(70);
  stroke(255);
  fill(255);
  } else {
    background(230);
    stroke(100);
    fill(100);
  }

  push();
  rotate(m*6);
  drawMinute();
  pop();

  push();
  if (h<=12) {
    rotate((h*30)+(m/2));
    } else { rotate(((h-12)*30)+(m/2)); }
  drawHour();
  pop();
  
  push();
  rotate((s*6)+90);
  drawSecond();
  pop();
 
  textFont("Courier", 18);
  
  push();
  fill(hourColor);
  noStroke();
  if (h>=0 && h<=9) {
  text("0"+h+":", -45, 210);
  } else { text(h+":", -45, 210); } 
  pop();
  
  push();
  fill(minuteColor);
  noStroke();
  if(m>=0 && m<=9) {
  text("0"+m+":", -10, 210);
  } else { text(m+":", -10, 210); }
  pop();
  
  push();
  noStroke();
  if(s>=0 && s<=9) {
  text("0"+s, 25, 210);
  } else {text(s, 25, 210);}
  pop();
  
}