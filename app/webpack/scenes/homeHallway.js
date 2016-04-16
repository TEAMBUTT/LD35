import $ from 'jquery';

import Scene from '../Scene.js';
import bedroom from '../scenes/bedroom.js';
import Door from '../entities/Door.js';

export class HomeHallway extends Scene {
  descriptionMessage() {
    const bedroomDoor = new Door(bedroom);
    const message = `
      You are in the hallway outside your <%= entity("bedroomDoor", "bedroom") %>.
    `;

    return this.insertEntities(message, {bedroomDoor});
  }
}

export default new HomeHallway();
