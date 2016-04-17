import Scene from '../../Scene.js';

import diningArea from './diningArea.js';
import Door from '../../entities/Door.js';

export class Bathroom extends Scene {
  descriptionMessage() {
    const diningAreaDoor = new Door(diningArea);

    const message = `
      You're in the bathroom.
      <br>
      The <%= entity("diningAreaDoor", "exit") %> is behind you. It is unlocked.
    `;

    return this.insertEntities(message, {diningAreaDoor});
  }
}

export default new Bathroom();
