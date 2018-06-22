/*

Videos --> code train
P5 tutorial 3.1 Conditional Statements
ex.
if (condition is true) {
do this
}

if (5>6) {
do this  (since 5>6 is false code wont be executed)
}

*/

function setup() {  //setup function will happen once
	createCanvas(600, 400); //windowWidth, windowHeight

}

function draw() {  //draw function will loop forever while browser is open

	//background
	background(0);
stroke (255);
strokeWeight(4);
noFill();
if(mouseX > 300){

	fill(255,0,200);// fill can take a 4th variable...transparency   100 = optact    0 = transparent
}
// ellipse
ellipse (300,200,100,100);
//ellipse (spot.x,100, 24,24);
//ellipse (200,100,34,50);
//ellipse(point.x, point.y,24,24); //replace x,y,diameter, diameter with var circle using dot syntax

}
