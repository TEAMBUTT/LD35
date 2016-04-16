import $ from 'jquery';

import Scene from '../Scene.js';

export class HomeHallway extends Scene {
  descriptionMessage() {
    const message = `
      <div>
        You are in the hallway outside your bedroom.
      </div>
    `;

    return this.insertEntities(message, {});
  }
}

export default new HomeHallway();
