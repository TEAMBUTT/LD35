import Scene from '../../Scene.js';

import diningArea from './diningArea.js';
import kitchen from './kitchen.js';
import Door from '../../entities/Door.js';

export class DiningArea extends Scene {
  descriptionMessage() {
    const diningAreaDoor = new Door(diningArea);
    const kitchenDoor = new Door(kitchen);

    const message = `
      The till is in front of you. An old lady, probably in her nineties, is
      waiting to order. She's tapping her foot impatiently. Behind her is the
      <%= entity("diningAreaDoor", "dining area") %>.
      <br>
      Behind you is the way to the <%= entity("kitchenDoor", "kitchen") %>.
    `;

    return this.insertEntities(message, {diningAreaDoor, kitchenDoor});
  }
}

export default new DiningArea();
