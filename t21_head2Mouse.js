/*******************************************************/
// P5.play: t21_head2Mouse
// Move sprite towards the mouse' position
// Written by ???
/*******************************************************/
	
/*******************************************************/
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
square.moveTowards(mouseX, mouseY, 1);

if (mouse.presses()) {

square.moveTo(xPos, yPos, 1);

}
}

/*******************************************************/
//  END OF APP
/*******************************************************/