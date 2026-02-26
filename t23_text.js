// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
	cnv = new Canvas(700, 700);
	world.gravity.y = 10;
	//world.gravity.x = 10;
	console.log("setup: ");
//cube = new Sprite(100, 100, 100, 100, "k");

//cube.color = '#87CEEB';

square = new Sprite(300, 100, 100, 100, 'k');
square.color = '#eef3f5';
square.rotationSpeed = 2;

}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
		background(255, 100, 100)
//square.moveTowards(mouseX, mouseY, 1);

//if (mouse.presses()) {

//square.moveTo(xPos, yPos, 1);
if (kb.pressing('left')) {

    // Set sprite's velocity to the left
square.vel.x = -5;
}

else if (kb.pressing ('right')) {

   square.vel.x= 5;

};

if (kb.released('left')) {

    // Set sprite's velocity to zero
 square.vel.x= 0;
}
if (kb.released('right')) {
square.vel.x= 0;

}
if (kb.pressing('up')){
	square.vel.y= -5;
}
else if (kb.pressing('down')){
	square.vel.y= 5;
}
if (kb.released('up')){
	square.vel.y= 0;
}
if (kb.released('down')){
	square.vel.y= 0;
}
}
/*******************************************************/
//  END OF APP
/*******************************************************/