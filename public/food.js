class Food{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    show(){
        fill(255,0,0);
        rect(this.x,this.y,10,10);
    }
    update(){
        this.x=floor(random(20))*10
        this.y=floor(random(20))*10
    }
}