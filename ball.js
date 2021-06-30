class Ball{
    constructor(x,y,radius) {
        var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0   
        }
        this.body = Bodies.circle(50,200,20);
        this.radius = radius;
        World.add(world,this.body);
       
      }
      display(){
        var pos = this.bosy.position;
        fill(176,219,83);
        ellipseMode(CENTER)
        ellipse(pos.X,pos.y,this.radius)


      }
}
