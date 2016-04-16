import $ from 'jquery';

import Scene from '../Scene.js';

class Bedroom extends Scene {
  descriptionMessage() {
    return $('<p>Your alarm clock is ringing beside you on the bedside table. Your uniform is on the floor beside your mirror.</p>');
  }
}

module.exports = new Bedroom();
