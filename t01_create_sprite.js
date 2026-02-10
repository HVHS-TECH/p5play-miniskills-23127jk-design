/*******************************************************/
// P5.play: t01_create_sprite
// Create a sprite
/// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
cnv = new canvas(windowwidth, windowheight)
cube = new Sprite(100, 100, 100, 100);

cube.color = 'blue';
background('blue')
circle= new sprite(50, 50, 50);

circle.color = 'red';
background("red")

}

/*******************************************************/
// draw()
/*******************************************************/
function draw() {
cnv = new canvas(windowwidth, windowheight)
cube = new Sprite(100, 100, 100, 100);

cube.color = 'blue';
background('blue')
circle= new sprite(50, 50, 50);

circle.color = 'red';
background("red")

}

/*******************************************************/
//  END OF APP
/*******************************************************/