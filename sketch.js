var tom,jerry,tomImg1,jerryImg,jerryAni,tomAni;
var bgImg;


function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    jerryImg = loadAnimation("images/mouse1.png");
    jerryAni = loadAnimation("images/mouse2.png"," images/mouse3.png");
    jerryAni2 = loadAnimation("images/mouse4.png")
    tomImg1 = loadAnimation("images/cat1.png");
   tomAni = loadAnimation("images/cat2.png","images/cat3.png");

   tomImg3 = loadAnimation("images/cat4.png")
}

function setup(){
    createCanvas(600,600);
  
    jerry = createSprite(150,525,100,60);
    jerry.addAnimation("mouseStanding",jerryImg);
   // jerry.addAnimatinon("mouseteasing",jerryAni);
    jerry.scale = 0.1;

    tom = createSprite(500,525,40,40);
    tom.addAnimation("tom1",tomImg1);
    tom.scale = 0.1;
    
    //create tom and jerry sprites here

}

function draw() {
    background(bgImg);

    //Write condition here to evalute if tom and jerry collide




    drawSprites();
}


function keyPressed(){
    if(keyCode === LEFT_ARROW){
       jerry.addAnimation("mouseteasing", jerryAni)
       jerry.frameDelay = 25;
       jerry.changeAnimation("mouseteasing");

       tom.velocityX = -5; 
       tom.addAnimation("tomRunning", tomAni);
       tom.changeAnimation("tomRunning");
       

       // tom.addAnimatinon("walking",tomAni);
       // tom.changeAnimation("walking",tomAni);
       // tom.frameDelay = 25;
    }

  //For moving and changing animation write code here


}
