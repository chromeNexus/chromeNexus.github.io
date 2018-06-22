/*
Videos --> code train
P5 tutorial 1.4 - 1.5

background(150, 150, 150); if using the same value for RGB... function can accept 1 value instead of typing same value 3x
fill(255,0,0);   can take a 4th variable...transparency   100 = optact    0 = transparent

code is executed top to bottom... order matters

fill must come before rect....otherwise color wont show...


function
	A set of instructions
	ex. rect -> will draw a rectangle in P5
	rect (_,_,_,_)
	rect = function name
	( _,_ ) = arguments to be evaluated by function
	arguments-> what is the function expecting?? in this example (x value, y value, width, height)

upload site to server
use cyberduck



 */



function setup() {
	createCanvas(480, 270); //windowWidth, windowHeight
}

function draw() {
	background(150, 150, 150); // if using the same value for RGB... background function can accept 1 value instead of typing same value 3x
	ellipseMode(CENTER);
	rectMode(CENTER);

// body
fill(255,0,0);   // fill can take a 4th variable...transparency   100 = optact    0 = transparent
rect(240,145, 20, 100);

//head
fill(0,0,255);
ellipse(240,115, 60,60);

//eyes
fill(0,255,0);
ellipse(221,115,16,32);
ellipse(259,115,16,32);


//legs
line(230,195,220,205);
line(250,195,260,205);

}
