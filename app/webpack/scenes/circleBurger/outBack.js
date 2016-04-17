import Scene from 'Scene';

import kitchen from './kitchen.js';
import Door from 'entities/Door';

export class OutBack extends Scene {
  descriptionMessage() {
    const kitchenDoor = new Door(kitchen, "Go back inside.");

    const message = `
      You are standing behind the Circle Burger, beside the dumpsters. It
      smells awful. Trapezoid's car-shaped automobile is still parked here for
      some reason.
      <br>
      The <%= entity("kitchenDoor", "door to go back inside") %> is behind you.
    `;

    return this.insertEntities(message, {kitchenDoor});
  }
}

export default new OutBack();
