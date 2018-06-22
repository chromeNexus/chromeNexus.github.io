/*

Videos --> code train
P5 tutorial 3.3 if  else   elseif and  or  statements

order of if, elseif, else statements matters
once true condition is reached, comp will go to next portion of program

and &&

or ||  (pipe)

ex. mouseX > 50 true -> no other portion of program is checked...

if you remove else from the conditonal logic... all if statements will be evaluated

adding else will connect if statements together...

*/

function setup() {  //setup function will happen once
createCanvas(600, 400); //windowWidth, windowHeight
}

function draw() {  //draw function will loop forever while browser is open

//background
background(0);
stroke(255);
strokeWeight(4);
noFill();

if(mouseX > 300 && mouseX < 400){  //when mouse is on box, box will change colors
fill(255, 0, 200);
}
rect(300,200,100,100);



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


}
