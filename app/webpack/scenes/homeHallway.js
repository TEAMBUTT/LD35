import $ from 'jquery';

import Scene from '../Scene.js';

export class HomeHallway extends Scene {
  descriptionMessage() {
    const message = `
      You are in the hallway outside your bedroom.
    `;

    return this.insertEntities(message, {});
  }
}

export default new HomeHallway();
