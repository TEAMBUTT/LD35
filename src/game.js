import Intro from './views/Intro.js';
import CircleBurgerGameView from './views/CircleBurgerGameView';

import 'finish.js'

const intro = new Intro();
intro
  .start()
  .done(() => {
    const game = new CircleBurgerGameView();
    game.start();
  });
