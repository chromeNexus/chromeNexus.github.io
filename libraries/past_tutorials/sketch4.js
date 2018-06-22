/*
Videos --> code train
P5 tutorial 2.3 javascript objects
json: javascript object notation
key: value   pairing
//

var circle; will be an object which contains 3 fields, x, y, diameter
var x = 0;  //changing value will change where circle is viewed on screen
var y = 200;
var diameter = 50;
*/
var circle1 = {
	x: 0,
	y: 200,
	diameter: 50
};

var circle2 = {
	x: 0,
	y: 100,
	diameter: 100
}

var r = 218;
var g = 160;
var b = 221;
function setup() {  //setup function will happen once
	createCanvas(600, 400); //windowWidth, windowHeight
}

function draw() {  //draw function will loop forever while browser is open
	//background

	background(r, g, b); // if using the same value for RGB... background function can accept 1 value instead of typing same value 3x
// ellipse
fill(250, 200, 200);   // fill can take a 4th variable...transparency   100 = optact    0 = transparent
ellipse(circle1.x, circle1.y, circle1.diameter, circle1.diameter); //replace x,y,diameter, diameter with var circle using dot syntax
circle1.x = circle1.x + 1;


//ellipse
fill(200, 150, 50);
ellipse(circle2.x, circle2.y, circle2.diameter, circle2.diameter)
circle2.x = circle2.x + 1;

}
