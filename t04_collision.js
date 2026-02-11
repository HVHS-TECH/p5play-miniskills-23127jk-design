/*******************************************************/
// P5.play: t04_collision
// Sprite falls due to gravity & collides with the floor
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
	cnv = new Canvas(755, 755);
	world.gravity.y = 10;
	world.gravity.x = 5;
	console.log("setup: ");
//cube = new Sprite(100, 100, 100, 100);

//cube.color = '#87CEEB';
//rectangle = new Sprite(200, 100, 200, 200, '200');

//rectangle.color = '#56be5b';

//rectangle.rotationSpeed = -2;
//rectangle.vel.x = 1;

//square = new Sprite(300, 100, 100, 100, '100');
//square.color = '#eef3f5';

//square.rotationSpeed = 2;
cube2 = new Sprite(300, 100, 100, 100, );

cube2.color = '#b065ee';

cube2.rotationSpeed = -2;

cube2.vel.x = 2;

platform_1 = new Sprite(300, 300, 200, 10, '1000');
platform_1.rotationSpeed = 0.5;
platform_1.rotationSpeed = -1;
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