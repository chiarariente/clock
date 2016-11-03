var hourColor = "#ff6666";
var minuteColor = "#009999";
var yText;

function drawSecond() {
  if (width<=height){
  strokeWeight(2.5);
  line(15,0,-width/4,0);
  ellipse(0,0,8,8);
  } else { 
    strokeWeight(4);
    line(20,0,-width/7,0);
    ellipse(0,0,10,10);
    }
}

function drawMinute() {
  stroke(minuteColor);
  noFill();
  if(width<=height){
  strokeWeight(2.5);
    beginShape();
      vertex(width/4,-width/4);
      vertex(width/4,width/4);
      vertex(-width/4,width/4);
      vertex(-width/4,-width/4);
      vertex(-5,-width/4);
      vertex(-5,-20);
      vertex(5,-20);
      vertex(5,-width/4);
      vertex(width/4,-width/4);
    endShape();
  } else {
    strokeWeight(4);
    beginShape();
      vertex(width/8,-width/8);
      vertex(width/8,width/8);
      vertex(-width/8,width/8);
      vertex(-width/8,-width/8);
      vertex(-8,-width/8);
      vertex(-8,-30);
      vertex(8,-30);
      vertex(8,-width/8);
      vertex(width/8,-width/8);
    endShape();
    }
}

function drawHour() {
  stroke(hourColor);
  noFill();
  if(width<=height){
  strokeWeight(2.5);
    beginShape();
      vertex(width/5,-width/5);
      vertex(width/5,width/5);
      vertex(-width/5,width/5);
      vertex(-width/5,-width/5);
      vertex(-5,-width/5);
      vertex(-5,-35);
      vertex(5,-35);
      vertex(5,-width/5);
      vertex(width/5,-width/5);
    endShape();
  } else {
    strokeWeight(4);
    beginShape();
      vertex(width/9,-width/9);
      vertex(width/9,width/9);
      vertex(-width/9,width/9);
      vertex(-width/9,-width/9);
      vertex(-8,-width/9);
      vertex(-8,-75);
      vertex(8,-75);
      vertex(8,-width/9);
      vertex(width/9,-width/9);
    endShape();
  }
}

function myText() {
  if (width<=height) {
    yText = height/3.5;
  } else {
    yText = height/2.7;
    }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
var h=hour();
var m=minute();
var s=second();

  translate(width/2,height/2-30);
  
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
    } else { rotate((h-12*30)+m/2); }
  drawHour();
  pop();
  
  push();
  rotate(s*6+90);
  drawSecond();
  pop();
 
  myText();
  textFont("Courier", 18);
  
  push();
  fill(hourColor);
  noStroke();
  myText();
  if (h>=0 && h<=9) {
  text("0"+h+":", -45, yText);
  } else { text(h+":", -45, yText); } 
  pop();
  
  push();
  fill(minuteColor);
  noStroke();
  myText();
  if(m>=0 && m<=9) {
  text("0"+m+":", -10, yText);
  } else { text(m+":", -10, yText); }
  pop();
  
  push();
  noStroke();
  myText();
  if(s>=0 && s<=9) {
  text("0"+s, 25, yText);
  } else {text(s, 25, yText);}
  pop();
  
}