class Box {
  constructor(x,y,width,height) {
    var options = {
        isStatic: false
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.visibility=225;
    World.add(world, this.body);
  }
  display(){
    if(this.body.speed<3){
    var pos =this.body.position;
    push();
    strokeWeight(3);
    stroke("white");
    fill("brown");
    rectMode(CENTER);
    rect(pos.x, pos.y, this.width, this.height);
    pop();
    }
    else{
      World.remove(world,this.body);
      push();
      this.visibility=this.visibility-5;
      tint(255,this.visibility);
      strokeWeight(3);
      stroke("white");
      fill("brown");
      rectMode(CENTER);
      rect(this.body.x,this.body.y, this.width, this.height);
      pop();
    }
  }
};