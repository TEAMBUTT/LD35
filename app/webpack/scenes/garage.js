import $ from 'jquery';

import Scene from '../Scene.js';

import homeHallway from '../scenes/homeHallway.js';
import Door from '../entities/Door.js';

export class Garage extends Scene {
  descriptionMessage() {
    const garageDoor = new Door(homeHallway);

    const message = `
      You are in the garage.
      <br>
      Your car isn't in great shape, but it runs, mostly.
      <br>
      You can go back to <%= entity("garageDoor", "the hallway") %>.
    `;

    return this.insertEntities(message, {garageDoor});
  }
}

export default new Garage();
