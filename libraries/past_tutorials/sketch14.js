/*
Videos --> code train
P5 tutorial 5.2 Function Parameters and arguments
syntax for defining function

function flowers()){
}

function -> keyword

flowers -> name of functions

(value) -> parameters of function aka variables local to function, can hold multiple values, separated by ','

How do you initalize a function?
initalizing a function --> giving parameters their initial value (aka --> aruguments)

ex.

flowers (200,100,10)
	equalant to
						var x = 200;
						var y = 100;
						var petals = 10

// NOTE: 200, 100, 10 are considered arguments for the parameters x, y, petals respectively

function name = flowers

x , y, petals = parameters to the function flowers  ---> equivalant to variables that are local within the function
equalant to
	var x  =

	var y  =
	var petals  =

function flower (x,y,petals){

	ellipse (x,y,10,10)
}


function draw(){
	background(204);
	drawRobot(120,420,110,140);
	drawRobot(270,460,260,95);
	drawRobot(420,310,80,10);
	drawRobot(570,390,180,40);
}

*/


function setup(){
	createCanvas (600,400);

}

function draw (){
background (50);


lollipop(100,100,50);
lollipop(300,200,150);
//lollipop(); // calls the function lollipop --> will execute aka run the function here
						// # of arguments should be equalant to number of parameters... () = 0 aruguments

}

//lollipop function parameters = x, y, diameter
function lollipop(x, y, diameter){

	fill(0, 200, 255);   // this defines the function
  rect(x-10,y,20,150);
	//rect(290, 200, 200, 150); // this defines the function
	fill (255, 0, 200);       // this defines the function
	ellipse(x, y, diameter, diameter)
	//ellipse(300,200,100,100);   // this defines the function
}
