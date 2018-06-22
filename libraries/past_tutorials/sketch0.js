/*
Videos --> code train
P5 tutorial 1.1-1.3

function
	A set of instructions
	ex. rect -> will draw a rectangle in P5
	rect (_,_,_,_)
	rect = function name
	( _,_ ) = arguments to be evaluated by function
	arguments-> what is the function expecting?? in this example (x value, y value, width, height)

 */

function setup() {
	createCanvas(640, 360); //windowWidth, windowHeight
}

function draw() {
	background(255,0,255);
	console.log(mouseX);
	rect(100,200,75,125)

}
