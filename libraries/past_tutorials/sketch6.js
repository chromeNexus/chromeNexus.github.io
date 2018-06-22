/*

Videos --> code train
P5 tutorial 2.5 random function   random number is chosen and then can be assigned to variable
parameter of random is minValue and maxValue
ex. var x = random(0, 50)  where minValue= 0 & maxValue= 50
cant use point as a variable because point is already predfined by p5

*/

var spot = {
	x: 100,
	y: 50
};
var col = {
	r: 255,
	g: 0,
	b: 0
};

function setup() {  //setup function will happen once
	createCanvas(600, 400); //windowWidth, windowHeight
	//background
	background(0);
}

function draw() {  //draw function will loop forever while browser is open

col.r = random(100,255);
col.g = 0;
col.b = random(100,190);
spot.x = random(0, width);
spot.y = random(0, height)//col = map(mouseX,0,600,0,255);
noStroke(); // will remove the black outline from circles
// ellipse
fill(col.r, col.g, col.b, 100);   // fill can take a 4th variable...transparency   100 = optact    0 = transparent
ellipse (spot.x,spot.y, 24,24);
//ellipse (spot.x,100, 24,24);
//ellipse (200,100,34,50);
//ellipse(point.x, point.y,24,24); //replace x,y,diameter, diameter with var circle using dot syntax

}
