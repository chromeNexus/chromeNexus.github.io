/*
function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {

}
*/

/*
Videos --> code train
P5 tutorial 5.1 Function Basics
	functions are Modular & reuseable
		reusabiliy -> arguments / parameters

function setup()//keyword that declares/define function
setup  // name of functions
(parameter /argument)  //where parameters/argument of function is placed between
function(setup)
{
	code within function
}
//var ball will be an object -> use json syntax
//think of json object as a container of variables which make up characteristics
*/
var ball = {
	x: 300,
	y: 200,
	xspeed: 4,
	yspeed: -3
},
function setup() {  //setup function will happen once
createCanvas(600, 400); //windowWidth, windowHeight creates canvas to draw on
},

function draw() {  //draw function will loop forever while browser is open
	// this function draws the ball

	background(0);

//}

	stroke(255);
	strokeWeight(4);
	noFill();
	ellipse(ball.x,ball.y,24,24);


	if(ball.x > width || ball.x <0)  //when ball gets to edge of x screen exe code
	{
		ball.xspeed = ball.xspeed * -1; //will reverse direction of ball on x axis
	}

	if(ball.y > height || ball.y < 0) //when ball gets to edge of y screen exe code
	{
		ball.yspeed = ball.yspeed * -1; //will reverse direction of the ball on y axis
	}
	ball.x = ball.x + ball.xspeed; // moves object on x axis
	ball.y = ball.y + ball.yspeed; // moves object on y axis
}

/*
function move()
{
	ball.x = ball.x + ball.xspeed;
	ball.y = ball.y + ball.yspeed;
}

function bounce()
{
	if(ball.x > width || ball.x <0)  //when ball gets to edge of x screen exe code
	{
		ball.xspeed = ball.xspeed * -1; //will reverse direction of ball on x axis
	}

	if(ball.y > height || ball.y < 0) //when ball gets to edge of y screen exe code
	{
		ball.yspeed = ball.yspeed * -1; //will reverse direction of the ball on y axis
	}
}
function display()
{
	stroke(255);
	strokeWeight(4);
	noFill();
	ellipse(ball.x,ball.y,24,24);
}

*/
