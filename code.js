var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["9ad0bd8c-4d39-41cd-942a-332800717d0e","23ce3b91-9bcd-4ea6-9603-564a68d52ec8"],"propsByKey":{"9ad0bd8c-4d39-41cd-942a-332800717d0e":{"name":"soccer_bw_1","sourceUrl":"assets/api/v1/animation-library/gamelab/KAKckB.0WJDP55kNGzIZIfW5wf7Rk5mG/category_sports/soccer_bw.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"KAKckB.0WJDP55kNGzIZIfW5wf7Rk5mG","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/KAKckB.0WJDP55kNGzIZIfW5wf7Rk5mG/category_sports/soccer_bw.png"},"23ce3b91-9bcd-4ea6-9603-564a68d52ec8":{"name":"texture_07_1","sourceUrl":"assets/api/v1/animation-library/gamelab/R5Ce80jCzTaJSm89_1XamM0fUQk8ISrS/category_backgrounds/texture_07.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"R5Ce80jCzTaJSm89_1XamM0fUQk8ISrS","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/R5Ce80jCzTaJSm89_1XamM0fUQk8ISrS/category_backgrounds/texture_07.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var paddle = createSprite(200, 375, 50, 15);
var ball = createSprite(150, 250, 10, 10);
ball.setAnimation("soccer_bw_1");
ball.scale = 0.05;


var score=0;
var gameState ="serve";

//first row of boxes
var box1 = createSprite(25, 75, 50, 50);
box1.setAnimation("texture_07_1");
box1.scale = 0.13;

var box2 = createSprite(75, 75, 50, 50);
box2.setAnimation("texture_07_1");
box2.scale = 0.13;

var box3 = createSprite(125, 75, 50, 50);
box3.setAnimation("texture_07_1");
box3.scale = 0.13;

var box4 = createSprite(175, 75, 50, 50);
box4.setAnimation("texture_07_1");
box4.scale = 0.13;

var box5 = createSprite(225, 75, 50, 50);
box5.setAnimation("texture_07_1");
box5.scale = 0.13;

var box6 = createSprite(275, 75, 50, 50);
box6.setAnimation("texture_07_1");
box6.scale = 0.13;

var box7 = createSprite(325, 75, 50, 50);
box7.setAnimation("texture_07_1");
box7.scale = 0.13;

var box8 = createSprite(375, 75, 50, 50);
box8.setAnimation("texture_07_1");
box8.scale = 0.13;

//second row of boxes
var box9 = createSprite(25, 125, 50, 50);
box9.setAnimation("texture_07_1");
box9.scale = 0.13;

var box10 = createSprite(75, 125, 50, 50);
box10.setAnimation("texture_07_1");
box10.scale = 0.13;

var box11 = createSprite(125, 125, 50, 50);
box11.setAnimation("texture_07_1");
box11.scale = 0.13;

var box12 = createSprite(175, 125, 50, 50);
box12.setAnimation("texture_07_1");
box12.scale = 0.13;

var box13 = createSprite(225, 125, 50, 50);
box13.setAnimation("texture_07_1");
box13.scale = 0.13;

var box14 = createSprite(275, 125, 50, 50);
box14.setAnimation("texture_07_1");
box14.scale = 0.13;

var box15 = createSprite(325, 125, 50, 50);
box15.setAnimation("texture_07_1");
box15.scale = 0.13;

var box16 = createSprite(375, 125, 50, 50);
box16.setAnimation("texture_07_1");
box16.scale = 0.13;



function draw() {
  background("pink");
  
  //display score
  textSize(15);
  stroke("red");
  text("Score : "+score,330,20);
  
  if(gameState == "serve")
  {
    textSize(25);
    text("Welcome! Press Enter to start.",30,200);
    
   //Moving the ball on pressing enter key
    if(keyDown("enter")){
    ball.velocityX = 3;
    ball.velocityY = 4;
    gameState="play";
  }
  }
  
  if(gameState == "play")
  {
   //Moving the paddle with mouse along the x-axis
  paddle.x=World.mouseX; 
  if(score===16 || ball.isTouching(bottomEdge)){
  gameState="end";
  }
  }
  
  if(gameState == "end")
  {
  ball.velocityX = 0;
  ball.velocityY = 0;
  textSize(40);
  text("Game Over!!",100,200);
  }
 
  //Making the ball bounceOff the paddle and three sides of canvas
  createEdgeSprites();
  ball.bounceOff(rightEdge);
  ball.bounceOff(leftEdge);
  ball.bounceOff(topEdge);
  ball.bounceOff(paddle);

  
  
  //destroy the boxes when ball touches them
  if(ball.isTouching(box1))
  {
    score=score+1;
    box1.destroy();
  }
  
  if(ball.isTouching(box2))
  {
    score=score+1;
    box2.destroy();
  }
  
  if(ball.isTouching(box3))
  {
    score=score+1;
    box3.destroy();
  }
  
  if(ball.isTouching(box4))
  {
    score=score+1;
    box4.destroy();
  }
  
  if(ball.isTouching(box5))
  {
    score=score+1;
    box5.destroy();
  }
  
  if(ball.isTouching(box6))
  {
    score=score+1;
    box6.destroy();
  }
  
  if(ball.isTouching(box7))
  {
    score=score+1;
    box7.destroy();
  }
  
  if(ball.isTouching(box8))
  {
    score=score+1;
    box8.destroy();
  }
  
  if(ball.isTouching(box9))
  {
    score=score+1;
    box9.destroy();
  }
  
  if(ball.isTouching(box10))
  {
    score=score+1;
    box10.destroy();
  }
  if(ball.isTouching(box11))
  {
    score=score+1;
    box11.destroy();
  }
  if(ball.isTouching(box12))
  {
    score=score+1;
    box12.destroy();
  }
  if(ball.isTouching(box13))
  {
    score=score+1;
    box13.destroy();
  }
  if(ball.isTouching(box14))
  {
    score=score+1;
    box14.destroy();
  }
  if(ball.isTouching(box15))
  {
    score=score+1;
    box15.destroy();
  }
  if(ball.isTouching(box16))
  {
    score=score+1;
    box16.destroy();
  }
  
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
