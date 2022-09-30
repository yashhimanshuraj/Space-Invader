var bg;
var missile;
var jet;
var enemy;
var score;
var gameState = PLAY;
 
function preload()
{
    bg = loadImage("bg.png")
    missile = loadImage("rocket.png")
    jet = loadImage("jet.png")
    enemy = loadIamge("enemy.png")

}
-
function setup()
{
    createcanvas(600,600)

    bg = createSprite(600,600);
    bg = setAnimation("bg.png");

    jet = createSprite(300,250);
    jet = setAnimation("jet.png");
    jet.scale = 0.5;

    enemy = createSprite(200,50);
    enemy = setAnimation("enemy.png");
    enemy.scale = 0.5; 
    enemy.velocityY = 11;

    missile = createSprite(300,300);
    missile = setAnimation("missile.png")
    missile.scale = 0.06;

}

function draw()
{
  background(225)

   if(keyDown("W"))
   {
     plane.x = plane.x+5;
   }
   if(keyDown("A"))
   {
    plane.x = plane.x-5;
   }
   if(KeyDown("S"))
   {
    missile.x = missile.x;
    missile.y = missile.y-40;
    missile.velocity = -10;
   }
   if(missile.isTouching(enemy))
   {
     enemy.y > 430
     enemy.y = 35
     enemy.Math.round(random(3,375))
     score = score+1
   }
    textColor("white")
    textSize(25)
    text("SCORE"+score,25,50)
   
   drawSprite();
}