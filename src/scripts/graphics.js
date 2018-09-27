import { Render } from 'matter-js';

export default function startRendering(engine, canvas) {
  canvas.parentNode = {};
  canvas.style = {};

  const render = Render.create({
    canvas,
    engine
  });

  function renderLoop() {
    Render.world(render);
    render.frameRequestId = requestAnimationFrame(renderLoop);
  }
  
  render.frameRequestId = requestAnimationFrame(renderLoop);
}