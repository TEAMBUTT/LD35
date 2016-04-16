import $ from 'jquery';

import Scene from '../Scene.js';

import homeHallway from '../scenes/homeHallway.js';
import Door from '../entities/Door.js';

export class HomeBathroom extends Scene {
  descriptionMessage() {
    const bathroomDoor = new Door(homeHallway);
    const message = `
      Nothing to do here! Go back to the <%= entity("bathroomDoor", "hallway") %>.
    `;

    return this.insertEntities(message, {bathroomDoor});
  }
}

export default new HomeBathroom();
