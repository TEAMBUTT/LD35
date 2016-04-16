import Scene from '../Scene.js';

import garage from './garage.js';
import Door from '../entities/Door.js';

export class Car extends Scene {
  descriptionMessage() {
    const carDoor = new Door(garage);

    const message = `
      You are in your car. You can <%= entity("carDoor", "get out") %>.
    `;

    return this.insertEntities(message, {carDoor});
  }
}

export default new Car();
