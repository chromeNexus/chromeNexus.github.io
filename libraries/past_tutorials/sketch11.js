/*
Videos --> code train
P5 tutorial 4.1 while and for loops

while(condition is true){
do something
}
boolean will evaluate to either true or false only
! = not operator
if on == true
function mousePressed()

x = x + 50  is equal to x += 50
x = x+1 is equal to x++
*/
function setup() {  //setup function will happen once
createCanvas(600, 400); //windowWidth, windowHeight
}

function draw() {  //draw function will loop forever while browser is open

	background(0);
	strokeWeight(4);
	stroke(255);

	var x = 0; //part 1 declare variable
	while (x <= width) { //test conditon of variable and execute code only if true
		fill(0,200,255),
		ellipse(x, 100, 25,25); //do something
		x = x + 50; //increment while conditon is true
	}// exit loop when false

	for (var x = 0; x < width; x = x +50) { //declare a var, test condition, do increment
	fill(255, 0, 200);
	ellipse(x, 300, 25, 25);

}
}



/*
ellipse(x, 200, 25,25);
x = x+50;

ellipse(x, 200, 25,25);
x = x+50;

ellipse(x, 200, 25,25);
x = x+50;

ellipse(x, 200, 25,25);
x = x+50;

ellipse(x, 200, 25,25);
x = x+50;
}
*/
