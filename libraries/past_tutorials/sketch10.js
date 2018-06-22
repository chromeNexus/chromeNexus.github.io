/*

Videos --> code train
P5 tutorial 3.4 Boolean Variables

boolean will evaluate to either true or false only
! = not operator
if on == true
function mousePressed()
*/
var on = false;
function setup() {  //setup function will happen once
createCanvas(600, 400); //windowWidth, windowHeight
}

function draw() {  //draw function will loop forever while browser is open
 if(on){
	 background(0,255,0);
 }
 else {
//background
background(0);
}
/*
if(mouseIsPressed){
	background(0,255,0)
}
*/
stroke(255);
strokeWeight(4);
noFill();

if(mouseX > 250 && mouseX < 350 && mouseY > 150 && mouseY < 250){  //when mouse is on box, box will change colors
	/*
	if(mouseIsPressed){
		background(0,255,0);
	}
	*/
		fill(255, 0, 200);
		}
rectMode(CENTER);
rect(300,200,100,100);
}

function mousePressed(){
	if(mouseX > 250 && mouseX < 350 && mouseY > 150 && mouseY < 250)
	{  //when mouse is on box, box will change colors
		on= !on; /* refractored version of code belowif

		(on) {
					on = false;
						}
		else{
					on = true;
				} */
}
}


/*
	if(mouseX > 300){
	ellipse(300, 200, 100,100);
	//fill(255,0,200)
}
*/
//if(mouseX > 50){
/*  if(mouseX > 250){
	ellipse(300, 200, 100,100);
}

//else
if  (mouseX > 150){
	rect(300, 200, 100, 100);
}

//else if (mouseX > 250){
	//else
	if (mouseX > 50){
	line(0,0,width,height);
}
*/

/*
else{
	point(300,200);
}
*/


/*
 else{
	rect(300,200,100,100)
}

*/




// ellipse
//ellipse(300,200,100,100);
//}


/*
if(mouseX > 250 && mouseX < 350 && mouseY > 150 && mouseY < 250){  //when mouse is on box, box will change colors
	if(mouseIsPressed){
		//background(0,255,0)
		fill(255, 0, 200);
		}
*/
