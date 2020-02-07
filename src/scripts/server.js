add() {
    this.boxes = [];
    if (this.boxes.length === 10) {
      return;
    }

    const x = (Math.random() * 400) + 100;
    const box = Bodies.rectangle(x, 200, 80, 80);
    World.add(this.engine.world, [box]);
    this.boxes.push(box);
  }

  jump() {
    if (this.boxes.length === 0) {
      return;
    }

    const id = Math.floor((Math.random() * this.boxes.length));;
    const box = this.boxes[id];

    const x = (Math.random() - 0.5);
    const y = (Math.random() - 0.5) / 4;

    Body.applyForce(box, { x: box.position.x, y: box.position.y}, { x, y });
  }