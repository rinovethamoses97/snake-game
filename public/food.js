class Food{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    show(){
        noFill();
        rect(this.x,this.y,10,10);
        image(foodImage,this.x,this.y,10,10);
    }
    update(){
        this.x=floor(random(20))*10
        this.y=floor(random(20))*10
    }
}