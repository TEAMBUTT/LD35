import $ from 'jquery';

import Scene from '../Scene.js';

export class HomeHallway extends Scene {
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

export default new HomeHallway();
