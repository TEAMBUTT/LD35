import Scene from '../../Scene.js';

import diningArea from './diningArea.js';
import Door from '../../entities/Door.js';

export class DiningArea extends Scene {
  descriptionMessage() {
    const diningAreaDoor = new Door(diningArea);

    const message = `
      The till is in front of you. An old lady, probably in her nineties, is
      waiting to order. She's tapping her foot impatiently.
      <br>
      Behind her is the <%= entity("diningAreaDoor", "dining area") %>.
    `;

    return this.insertEntities(message, {diningAreaDoor});
  }
}

export default new DiningArea();
