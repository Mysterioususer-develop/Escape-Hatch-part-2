var platform1;
var ob1;
var player;
var ob1Group;
var bg1;
gameState=0;

var bg1_image;
var bg3;
var bg3_image;
var player_img;
var player2_img;
var bg4;
var bg4_img;
var bg5;
var bg5_img;
var key;
var key_img;
var ob2;
var ob3;
var ob4;
var ob5;
gameState=0;
function preload(){

  bg1_image=loadImage("Sprites/Bg2.jpg");
  bg3_image=loadImage("Sprites/bg3.jpg");
  bg4_img=loadImage("Sprites/bg4.png");
  bg5_img=loadImage("Sprites/bg5.jpg");
  player_img=loadImage("Sprites/player.png");
  player2_img=loadImage("Sprites/playerRight.png");
  key_img=loadImage("Sprites/key.png");
}
function setup() {
  createCanvas(1500, 600);
  platform1=createSprite(800,425,1600,40);
  player=createSprite(1485,395,30,30);
 // key = createSprite(762,191,20,40);
  ob1Group = new Group();
  ob1 = createSprite(392,325,100,10);
  ob2=createSprite(583,262,100,10);
  ob3=createSprite(782,306,100,10);
  ob4=createSprite(917,223,100,10);
  ob5=createSprite(1105,186,100,10);
}

function draw() {

  if(gameState===0){
    background(bg1_image);
  }
  


else if(gameState===1){
  background(bg3_image);
}  

 

if(gameState===2){
  background(bg4_img);
}

else if(gameState===3){
  background(bg5_img);
}

  fill("white");
  player.collide(platform1);



platform1.visible=false;

player.collide(ob1);
player.collide(ob2);
player.collide(ob3);
player.collide(ob4);
player.collide(ob5);

player.scale=1/8
player.velocityY=player.velocityY+0.8;


}
