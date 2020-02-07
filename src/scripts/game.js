import Net from './net.worker.js';
import View from './view.worker.js';

export class Game {

  constructor(options) {
    Object.assign(this, options);
  }

  async loop() {
    const { canvas, listener } = this;
    const offscreen = canvas.transferControlToOffscreen();

    const [net, view] = await Promise.all([
      new Net(),
      new View(offscreen)
    ]);

    listener.register_many([{
      keys: 'space',
      on_keydown: function() {
        console.log('got stuff', arguments);
      }
    }, {
      keys: 'enter',
      on_keydown: function() {
        console.log('got stuff', arguments);
      }
    }]);
    
    view.start();

    while (true) {
      const changes = await net.receive();
      await view.update(changes);
      // TODO: return changes to net layer -- gc in the separate thread?
    }
  }

}