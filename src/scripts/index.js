import { Listener } from 'keypress.js';
import Game from './game.js';

import '../styles/index.scss';

(async function main() {
  const canvas = document.querySelector('canvas');

  const listener = new Listener();
  const game = new Game(canvas, listener);

  await game.loop();
})()
  .catch(e => {
    console.error('Uncaught', e);
  });