/*******************************************************/
// P5.play: t01_create_sprite
// Create a sprite
/// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	//cnv = new Canvas(700, 700);


	//console.log("setup: ");
//cube = new Sprite(100, 100, 100, 100);

//cube.color = '#87CEEB';
 width = random(300,600);
height = random(300,600);

cnv = new Canvas(400, 400);

red = new Sprite(50, 50 ,100,100);
red.color = 'red';

green = new Sprite( 350, 50 ,  100,100);
green.color = 'green';

blue = new Sprite( 350, 350 ,  100,100);
blue.color = 'blue';

yellow = new Sprite( 50, 350 ,  100,100);
yellow.color = 'yellow';

purple = new Sprite( 200, 200 ,  100,100);
purple.color = 'purple';

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