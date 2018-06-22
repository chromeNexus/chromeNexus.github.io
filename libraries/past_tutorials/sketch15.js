/*
Videos --> code train
P5 tutorial 5.3 Functions and Return

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

// ex. 1
function setup (){
	var angle= degees(PI/2);
	println(angle);

}

function draw(){

}


/*

//ex. 2
function setup(){

	var km = milesToKm(26.3);
	println(km);
	var km2 = milesToKm(100)
	println(km2);
}

function milesToKm(miles){
	var km = miles * 1.6;
	return km;
}

*/
