/*

var -> uses function scope
let -> uses block scope

hoisting






Videos --> code train
P5 tutorial 16.1 ES6 var vs let

encapsulation
	you want to encapsulate data and functionality into a object
	all attributes of a bubble in this example
		class -> a template
						 a blueprint
	class Bubble -> all attributes of a Bubble
	use a class so that you dont have to repeatedly create bubbles over and over
	in setup() or draw()

class is a cookie cutter

instance is referred to when you use the object within your code

class = cookie cutter  (object class)


object = cookie   (object aka instance)

ex.

setup(){
bubble = new buble() //create a new object (instance)
}

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

bubble = new Bubble()  //new -> is a function to create (construct) an object in this case Bubble

class Bubble
constructor() // a function which is equal to a setup where you define the object

	this.x = 100, // "this" and "bubble" refer to the same variable
	this.y = 100



var bubble = {
	x: 300,
	y: 200,
}

function setup(){
	createCanvas(600, 400);
}

function draw(){
	background(0);
	bubble.move();  // bubble.move() replaced move()
	bubble.display(); // bubble.display() replaced display()
}

	function display(){
		stroke(255);
		strokeWeight(4);
		noFill();
		ellipse(bubble.x, bubble.y, 24, 24);
	},



	function move(){
		bubble.x = bubble.x + random(-1,1);
		bubble.y = bubbble.y + random(-1,1);
	}





	function show (){

	}
	*/
/*
	function setup(){
		let x;
		console.log(x);
		x = 100;  // better to use let... cant refer to variable prior to declaration
		console.log(x);
}
*/
/*

when you use var
variables are declared at top of code and var declaration is removed from code throughout

see below
*/

/*
	function setup(){
		var i, x, y; // this line is automatically added when using var (function scope)
		console.log(y);
		for(i = 0; i < 100; i++){ //for(var i = 0; i < 100; i++){
			// some stuff will happen
		}
		x = mouseX + 100; //var x = mouseX + 100;
		if (x > 50){
	 y = 20;	//var y = 20;
			ellipse (x,y,100,100);
			console.log(i);
		}
	}
*/

function setup (){
	for (let i = 0; i < 100; i++){
		// some stuff will happen
   // note when using let... variable wont be hoisted and instead is contained this this block(the code within the for loop only...)
	 // this prevents errors overtime because it makes you declare a variable and then refer to them instead of it being global....more predictable)

	}
	console.log(i);
}



/*
	let bubble1; // let is equal to var but only that instance
	let bubble2;

	 //= {
	//	x: 300,
	//	y: 200,
	//}

	function setup(){
		createCanvas(600, 400);
		bubble1 = new Bubble(200,200, 40);
		bubble2 = new Bubble(400, 200, 20); //400, 200, 20 are the arguments
	//	print(bubble.x, bubble.y);
	}
	function draw(){
		background(0);
	 bubble1.move();  // bubble.move() replaced move()
	 bubble1.show();
	 bubble2.move(); // bubble.display() replaced display()
	 bubble2.show();
	}

// in class -> use this not variable name i.e bubble
	class Bubble{
		constructor(tempX, tempY, tempR){ // x, y, r are the parameters for this constructor function
			this.x = tempX; //this.x = 200;
			this.y = tempY; //this.y = 150;
			this.r = tempR;
	}
	 	move(){
			this.x = this.x + random(-5,5); //random function with range of -5 to 5
			this.y = this.y + random(-5,5);
		}
		show(){
			stroke(255);
			strokeWeight(4);
			noFill();
			ellipse (this.x, this.y, this.r*2);
		}
}



*/





/*
place code below inside object

function move(){
	bubble.x = bubble.x + random(-1,1);
	bubble.y = bubble.y + random(-1,1);

}
function show(){
	stroke(255);
	strokeWeight(4);
	noFill();
	ellipse (bubble.x, bubble.y, 24,24);

}

*/
