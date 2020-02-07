import { Engine, World, Bodies, Body, Common, Vector } from 'matter-js';

import startPhysics from './physics.js';
import startGraphics from './graphics.js';

/* Patches for dealing with being in a worker */
Common.now = () => performance.now();

export class View {

    constructor(canvas) {
        this.physicsFps = 60;
        this.canvas = canvas;
    }

    start() {
        const engine = Engine.create();

        const ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });
        const left = Bodies.rectangle(0, 275, 1, 610, { isStatic: true });
        const right = Bodies.rectangle(800, 275, 1, 610, { isStatic: true });

        World.add(engine.world, [ground, left, right]);

        startPhysics(this.engine, this.physicsFps);
        startGraphics(this.engine, this.canvas);
    }

}