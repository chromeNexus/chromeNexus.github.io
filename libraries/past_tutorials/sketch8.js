/*

Videos --> code train
P5 tutorial 3.2 Bouncing Ball


*/
var x = 0;
var speed = 3;
function setup() {  //setup function will happen once
createCanvas(600, 400); //windowWidth, windowHeight
}

function draw() {  //draw function will loop forever while browser is open

//background
background(0);
stroke(255);
strokeWeight(4);
noFill();
// ellipse
ellipse(x,200,100,100);

// if (x > width) {
if(x > width || x < 0){
  //println("OFF THE SCREEN!")
	//x = x-3;
	//speed = -3;

	speed = speed * -1;
}
//x = x+3;
x = x + speed;
}
