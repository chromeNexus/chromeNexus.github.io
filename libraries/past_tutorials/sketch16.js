/*
Videos --> code train
P5 tutorial 5.4 Functions inside of an object

syntax
	var bubble = {

		x: 200,
		y: 150
		display: function(){
		}

}

var x = function display () or in this ex. diplay: function()


ellipse (){
}

ex.

var bubble = {

	x: 200,
	y: 150
	display: function(){

		ellipse(this.x, this.y, 20,20)
	}

}


bubble.display();
	-> will look up display key value pair and run function()
		keyword this refers to this.x -> bubble.x value which is 200,  this.y -> bubble.y value which is 150





ellipse() vs random() in P5 library
difference between the 2 Functions

ellipse() draws a shape in the window
random() provides a random number within a range --> it "returns" a number within a specified range
ex.
	var x = random() // will return a random number within a specified range, which will be used instantly (value stored in X variable)
	fill (random(255)) -> in this example random is the function that will return a random number between 0 and 255
	ellipse doesnt return a value.. it the function ellipse doesnt evaluate to anything, it just draws a shape and finshes


syntax for defining a function

	function nameOfFunction (parameter){

		code within function goes where
		return value
}
*/

var bubble = {
	x: 300,
	y: 200,
	display: function(){
		stroke(255);
		strokeWeight(4);
		noFill();
		ellipse(this.x, this.y, 24, 24);
	},
	move: function(){
		this.x = this.x + random(-1,1);
		this.y = this.y + random(-1,1);
	}
}

function setup(){
	createCanvas(600, 400);
}

function draw(){
	background(0);
	bubble.move();  // bubble.move() replaced move()
	bubble.display(); // bubble.display() replaced display()
}
/*
place code below inside object

function move(){
	bubble.x = bubble.x + random(-1,1);
	bubble.y = bubble.y + random(-1,1);

}
function display(){
	stroke(255);
	strokeWeight(4);
	noFill();
	ellipse (bubble.x, bubble.y, 24,24);

}

*/
