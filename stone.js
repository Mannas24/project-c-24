class Stone {
    constructor(x, y) {
      var options = {
        'density':4,
        'friction': 0.2,
        'restitution':0.5
      };
      this.body = Bodies.rectangle(x, y, 10, 10, options);
      this.width = 70;
      this.height = 70;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      pos.x = 300;
      pos.y = 300;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('white')
      fill('red')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };