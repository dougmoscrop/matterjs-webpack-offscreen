import { Engine, World, Bodies, Body, Common, Vector } from 'matter-js';
import startPhysics from './physics.js';
import startGraphics from './graphics.js';

/* Patches for dealing with being in a worker */
Common.now = () => performance.now();

export class Game {
  constructor() {
    this.engine = Engine.create();
    this.boxes = [];
  }

  load() {
    this.ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });
    this.left = Bodies.rectangle(0, 275, 1, 610, { isStatic: true });
    this.right = Bodies.rectangle(800, 275, 1, 610, { isStatic: true });
    World.add(this.engine.world, [this.ground, this.left, this.right]);
  }

  start({ canvas, physicsFps }) {
    startPhysics(this.engine, physicsFps);
    startGraphics(this.engine, canvas);
  }

  add() {
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

}