//var marks = [12, 100, 56, 97,54,545,54,5,4,44];
//initialization, condition,increment
//for(varj =0;j<marks.length ; i=i+3){
//}





var trex ,trex_running;
var edges,ground,groundImg;
var invisbleGround;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImg = loadImage("ground2.png");
}

function setup(){
  createCanvas(600,200)
    
  //create a trex sprite
  trex = createSprite(50,163 ,20, 50);
  trex.addAnimation("running",trex_running);
  trex.scale=0.5

  //create a ground sprite
  ground = createSprite(200, 180, 400, 20);
  ground.addImage("ground",groundImg);


  // create a invisble Ground
  invisbleGround = createSprite(200,190 , 400, 20);
  invisbleGround.visible = false;
  //create edgeSprite
  edges=createEdgeSprites();
 
  
}



  function draw(){
    background("white")

    ground.velocityX=-2;

    console.log(trex.y); 

    //infinetly moving ground
    if(ground.x<0){
    ground.x= ground.width/2 //ground.x=200
    }

    //console.log(ground.x)
    if(keyDown("SPACE") && trex.y >= 157){
    trex.velocityY=-8
    }

  //adding gravity
  trex.velocityY = trex.velocityY + 0.5;

  //collide on ground
  trex.collide(invisbleGround);
  drawSprites();
}
