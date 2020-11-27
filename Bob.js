class Bob{
    constructor(x, y, r){
        var options={
            'isStatic': false,
            'restitution': 0.6,
            'friction': 1.0,
            'density': 5.0
        }

        this.x = x;
        this.y = y;
        this.r = r
        this.body = Bodies.circle(this.x, this.y, this.r/2, options);
        World.add(world, this.body);
    }

    display(){

        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        strokeWeight(2);
        stroke("black")
        fill("pink");
        ellipse(0, 0, this.r, this.r);
        pop();
        
    }
}