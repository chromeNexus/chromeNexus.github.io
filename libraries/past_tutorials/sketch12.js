/*
Videos --> code train
P5 tutorial 4.2 Nested loops
allows for 2 dimensional manipulation
for every x and y do something
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
//var offset = 0;
function setup() {  //setup function will happen once
createCanvas(600, 400); //windowWidth, windowHeight
}

function draw() {  //draw function will loop forever while browser is open

	background(0);
	strokeWeight(4);
	stroke(255);

	for (var x = 0; x <= mouseX; x += 50) { //declare a var, test condition, do increment
		for(var y = 0; y <=mouseY; y +=50) {  //sub mouseY for height
			fill(random(255), 0, random(255));
			ellipse(x, y,25,25);
		}
		/*for(var y = 0; y <=height; y +=50) {
			fill(random(255), 0, random(255));
			ellipse(200, y,25,25);
		}
		*/
	//ellipse(x + offset, 200, 25, 25);
	}
}
//offset = offset +1;
//}



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
