import $ from 'jquery';

import Scene from '../Scene.js';

class HomeHallway extends Scene {
  descriptionMessage() {
    const message = $(`
      <div>
        You are in the hallway outside your bedroom.
      </div>
    `);

    this.insertEntities(message, []);

    return message;
  }
}

module.exports = new HomeHallway();
