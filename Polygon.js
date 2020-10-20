class Polygon {
    constructor(x, y) {
      var options = {
          'isStatic':false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.circle(x, y, 30,options,6);
      this.radius = 30;
      this.maxSides = 6;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      strokeWeight(1);
      stroke("blue");
      fill("yellow");
      ellipseMode(CENTER);
      ellipse(0, 0, this.radius);
      pop();
    }
  };