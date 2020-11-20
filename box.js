class Box {
    constructor(x,y,width,height){
        
       var options = {
           restitution : 0.1 , 
           friction : 0 ,
           density : 1 ,
           frictionStatic : 0
           

       }
       
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
       
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        console.log(this.body);
        push();
        translate(pos.x,pos.y);
        rotate(angle)
        fill("lightblue");
        rectMode(CENTER);
        rect(0,0,this.width,this.height)
        pop();
    }


}