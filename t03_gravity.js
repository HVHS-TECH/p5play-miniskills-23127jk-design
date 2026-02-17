/*******************************************************/
// P5.play: t03_gravity
// Sprite falls due to gravity
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	cnv = new Canvas(700, 700);
	world.gravity.y = 10;
	//world.gravity.x = 10;
	console.log("setup: ");
cube = new Sprite(100, 100, 100, 100);

cube.color = '#87CEEB';
//rectangle = new Sprite(200, 100, 200, 200, '200');

//rectangle.color = '#56be5b';

//rectangle.rotationSpeed = -2;
//rectangle.vel.x = 1;

square = new Sprite(300, 100, 100, 100, '100');
square.color = '#eef3f5';

square.rotationSpeed = 2;
}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
background(255, 100, 100)
}

/*******************************************************/
//  END OF APP
/*******************************************************/