class Snake{
    constructor(){
        this.body=[];
        this.body.push(createVector(0,0))
        this.xDir=0;
        this.yDir=0;
        this.temp=new Object();
    }
    update(){
        this.temp.x=this.body[this.body.length-1].x;
        this.temp.y=this.body[this.body.length-1].y;
        var temp=new Object();
        temp.x=this.body[0].x;
        temp.y=this.body[0].y;
        this.body[0].x+=this.xDir;
        this.body[0].y+=this.yDir;
        for(var i=1;i<this.body.length;i++){
            var temp1=new Object();
            temp1.x=this.body[i].x;
            temp1.y=this.body[i].y;
            this.body[i].x=temp.x;
            this.body[i].y=temp.y;
            temp.x=temp1.x;
            temp.y=temp1.y;
        }
    }
    setDir(xd,yd){
        if((xd==10 && yd==0 && this.xDir==-10 && this.yDir==0)||(xd==-10 && yd==0 && this.xDir==10 && this.yDir==0)||(xd==0 && yd==-10 && this.xDir==0 && this.yDir==10)||(xd==0 && yd==10 && this.xDir==0 && this.yDir==-10)){
            var temp=this.body;
            this.body=[];
            for(var i=temp.length-1;i>=0;i--){
                this.body.push(temp[i]);
            }
        }
        this.xDir=xd;
        this.yDir=yd;
    }
    show(){
        for(var i=0;i<this.body.length;i++){
            if(i==0){
                fill(0,255,0)
            }
            else
                fill(255);
            rect(this.body[i].x,this.body[i].y,10,10);
        }
    }
    eat(){
        this.body.push(createVector(this.temp.x,this.temp.y));
    }
    eatFoodCheck(food){
        if(this.body[0].x==food.x && this.body[0].y==food.y){
            this.eat();
            food.update();
        }
    }
    wallHitCheck(){
        if(this.body[0].x<0 || this.body[0].x+10>width ||this.body[0].y<0 || this.body[0].y+10>height){
            return true;
        }
        return false;
    }
    selfCollisionCheck(){
        for(var i=1;i<this.body.length;i++){
            if(collideRectRect(this.body[0].x,this.body[0].y,9,9,this.body[i].x,this.body[i].y,9,9)){
                return true;    
            }
        }
        return false;
    }
}