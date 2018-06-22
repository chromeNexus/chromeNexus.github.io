/*
Videos --> code train
P5 tutorial 2.2 making your own variables
// variables -> declare, initialize, use

*/

var circleX = 0;  //changing value will change where circle is viewed on screen

function setup() {  //setup function will happen once
	createCanvas(600, 400); //windowWidth, windowHeight

}

function draw() {  //draw function will loop forever while browser is open
	//background
	background(250, 250, 100); // if using the same value for RGB... background function can accept 1 value instead of typing same value 3x

// ellipse
fill(250,200,200);   // fill can take a 4th variable...transparency   100 = optact    0 = transparent
ellipse(circleX,200,80,80);
circleX = circleX +1;
}
