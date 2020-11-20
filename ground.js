class Ground {
    constructor(x,y,width, height){
        //properties
        var options = {
            isStatic: true ,
            frictionStatic : 0 ,
            friction : 0 
        }
        this.body = Bodies.rectangle(x, y, width, height, options)
        this.width = width;
        this.height = height
        World.add(world, this.body)
    }

    display(){
        var pos = this.body.position;
        fill("brown")
        rectMode(CENTER)
        rect(pos.x, pos.y, this.width, this.height);
    }


    //functions
}