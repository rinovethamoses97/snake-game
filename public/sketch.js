var snake;
var food;
var foodImage;
function preload(){
    foodImage=loadImage("./food.jpg");
}
function setup(){
    createCanvas(200,200);
    snake=new Snake();
    food=new Food(floor(random(20))*10,floor(random(20))*10);
}
function draw(){
    frameRate(12);
    background(0);
    snake.update();
    if(snake.wallHitCheck()||snake.selfCollisionCheck()){
        alert("Game Over");
        snake.restart();
    }
    snake.show();
    food.show();
    snake.eatFoodCheck(food);    
}
function keyPressed(){
    if(keyCode===LEFT_ARROW){
        snake.setDir(-10,0);
    }
    else if(keyCode===RIGHT_ARROW){
        snake.setDir(10,0);
    }
    else if(keyCode===DOWN_ARROW){
        snake.setDir(0,10);
    }
    else if(keyCode===UP_ARROW){
        snake.setDir(0,-10);
    }
}