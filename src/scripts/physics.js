import { Engine } from 'matter-js';

export default function startPhysics(engine, fps) {
  const step = 1000 / fps;

  let accumulator = 0.0;
  let currentTime = performance.now();

  function update() {
    const newTime = performance.now();
    const frameTime = newTime - currentTime;

    currentTime = newTime;
    accumulator += frameTime;

    while (accumulator >= step) {
      accumulator -= step;
      Engine.update(engine, step);
    }
  }

  setInterval(update, step);
};