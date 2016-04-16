import $ from 'jquery';

import Scene from '../Scene.js';
import bedroom from '../scenes/bedroom.js';
import homeHallway from '../scenes/homeHallway.js';
import Door from '../entities/Door.js';

export class HomeKitchen extends Scene {
  descriptionMessage() {
    const hallwayDoor = new Door(homeHallway);
    const message = `
      You are in the kitchen. It smells awful, because you haven't taken your
      garbage out since before last weeks crazy bender.
    `;

    return this.insertEntities(message, {hallwayDoor});
  }
}

export default new HomeKitchen();
