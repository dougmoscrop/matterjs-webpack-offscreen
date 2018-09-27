import Game from './game.worker.js';
import { Listener } from 'keypress.js';

import '../styles/index.scss';

new Game().then(game => {
  return game.load()
    .then(() => {
      const canvas = document.querySelector('canvas').transferControlToOffscreen();

      return game.start({ canvas, physicsFps: 45 });
    }).then(() => {
      const listener = new Listener();

      return listener.register_many([{
        keys: 'space',
        on_keydown: () => game.jump()
      }, {
        keys: 'enter',
        on_keydown: () => game.add()
      }]);
    });
});
