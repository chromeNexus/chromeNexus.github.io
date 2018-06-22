/*
Videos --> code train
P5 tutorial 2.4 map function
mousex variable of p5 which is equal to range of 0 and createCanvas () x value  i.e 600

map function in this example will map mouseX to range of background color (0 <--> 255).
	when mouseX = 0  background color = 0.... when mousex = 600, background color = 255

map function arguments (5)
variable you want to map, minValue / maxValue of current range, minValue / maxValue of new range,

map (mouseX, 0, 600, 0, 255)
will map mouseX (with a range of 0-600 to background color which has range of 0 -255

*/

//var col = 0; //color

var r  = 0;
var b = 255;

function setup() {  //setup function will happen once
	createCanvas(600, 400); //windowWidth, windowHeight
}

function draw() {  //draw function will loop forever while browser is open

	//col = map(mouseX,0,600,0,255);
	r = map(mouseX,0,600,0,255);
  b = map(mouseX,0,600,255,0);
	//background
	//background(col); // if using the same value for RGB... background function can accept 1 value instead of typing same value 3x
background(r, 0, b);

// ellipse
fill(250, 118, 222);   // fill can take a 4th variable...transparency   100 = optact    0 = transparent
ellipse(mouseX, 200, 64,64); //replace x,y,diameter, diameter with var circle using dot syntax



}
