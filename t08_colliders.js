/*******************************************************/
// P5.play: t08_colliders
// Work with colliders
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
console.log("setup: ");
cnv = new Canvas(800, 800);
	world.gravity.y = 10;
  alienGroup = new Group();
	//world.gravity.x = 10;
	console.log("setup: ");

wallLH  = new Sprite(0, height/2, 8, height, 'k');

wallLH.color = 'rgba(0, 0, 0, 0.93)';

wallRH  = new Sprite(800, 400, 25, 800, 'k');

wallTop = new Sprite(400, 0, 800, 25, 'k');

wallBot = new Sprite(400, 800, 800, 25, 'k');

ball_1 = new Sprite(width/2, height/2, 50, 'd');
ball_1.color = 'rgba(38, 0, 255, 0.93)';
ball_1.vel.x = 2;
ball_1.vel.y = 2;
ball_1.bounciness = 1;
ball_1.friction = 0;
ball_1.drag = 0;

//ball_2 = new Sprite(width/2, height/2, 50, 'd')
//ball_2.color = 'rgba(18, 160, 37, 0.93)';
//ball_2.vel.x = 2
//ball_2.bounciness = 1
//ball_2.friction = 0
//ball_2.drag = 0;
//const VELARRAY = [-1, 1];

//let randNum = random(4, 7) * random(VELARRAY);
//alien = new Sprite(200, 100, 150, 150,);

  //alien.vel.x = 3;

 // alien.vel.y = 4;

 // alien.bounciness = randNum;

//  alien.friction = 0;

//alienGroup = new Group();
//alien = new Sprite(200, 400, 150, 150,);

 // alien.vel.x = 3;

 // alien.vel.y = 4;

//  alien.bounciness = 1;

 // alien.friction = 0;

//const VELARRAY = [-1, 1];

//randNum = random(-4, 7) * random(VELARRAY);
for (i = 0; i < 5; i++) {

  alien_2 = new Sprite( 200, 200, 100, 100, "d");

  alien_2.vel.x = 3;

  alien_2.vel.y = 4;

  //alien_2.bounciness = randNum;

  alien_2.bounciness = 1;

  alien_2.friction = 0;

alienGroup.add(alien_2)
    alienGroup.collides(ball_1, func2Call);

}
function func2Call(_ssss, _ball_1) {
//alert("hello")
// Delete the alien which was hit

_ssss.remove();

}

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