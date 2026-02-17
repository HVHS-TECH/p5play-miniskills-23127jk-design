/*******************************************************/
// P5.play: t05_createWalls
// Create walls around the canvas
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
	cnv = new Canvas(800, 800);
	world.gravity.y = 10;
	//world.gravity.x = 10;
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
//cube2 = new Sprite(300, 100, 100, 100, );

//cube2.color = '#b065ee';

//cube2.rotationSpeed = -2;

//cube2.vel.x = 1;

//platform_1 = new Sprite(300, 300, 200, 10, 'K');
//platform_1.rotationSpeed = 0.5;
//platform_1.rotationSpeed = -1;
//platform_2 = new Sprite(450, 350, 200, 10, 'S')
//platform_2.rotationSpeed = 0.5;
//platform_2.rotationSpeed = -1;
//platform_1.bounciness = 0;
//platform_1.friction = 0.5;
//platform_2.bounciness = 0;
//platform_2.friction = 0.5;
//platform_1.drag = 0;
//platform_2.drag = 0;
//cube2.bounciness = 0;
//cube2.friction = 1;
//cube2.drag = 0.5;
wallLH  = new Sprite(0, height/2, 8, height, 'k');

wallLH.color = 'black';

wallRH  = new Sprite(800, 400, 25, 800, 'k');

wallTop = new Sprite(400, 0, 800, 25, 'k');

wallBot = new Sprite(400, 800, 800, 25, 'k');

ball_1 = new Sprite(width/2, height/2, 50, 'd');

ball_1.color = 'cyan';

ball_1.vel.x = 2;

ball_1.vel.y = 2;

ball_1.bounciness = 1;

ball_1.friction = 0;

ball_1.drag = 0;
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