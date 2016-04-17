import Scene from 'Scene';

import counter from './counter.js';
import Door from 'entities/Door';

export class Kitchen extends Scene {
  descriptionMessage() {
    const counterDoor = new Door(counter, "Walk over.");

    const message = `
      You are in the disgusting, grungy kitchen of the Circle Burger.
      <br>
      In front of you is the deep fryer and the grill. Behind you is the prep
      station. There's a folded note with your name on it sitting on the prep
      station.
      <br>
      Around the corner from you is <%= entity("counterDoor", "the counter") %>.
    `;

    return this.insertEntities(message, {counterDoor});
  }
}

export default new Kitchen();
