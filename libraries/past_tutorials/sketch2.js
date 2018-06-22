/*
Videos --> code train
P5 tutorial 2.1 Variables

//mousePressed  -> considered an EVENT ... may or may not occur
 */

function setup() {  //setup function will happen once
	createCanvas(600, 400); //windowWidth, windowHeight

  //background
	background(250, 250, 100); // if using the same value for RGB... background function can accept 1 value instead of typing same value 3x
}

function draw() {  //draw function will loop forever while browser is open
// ellipse
noStroke();
fill(250,200,200,50);   // fill can take a 4th variable...transparency   100 = optact    0 = transparent
ellipse(mouseX,mouseY,25,25);
//rectangle
//fill(200,250,200);
//rect(400,100, 50,50);
}
function mousePressed() {  //mouse pressed  -> considered an EVENT ... may or may not occur

background (250, 250, 100);
}
