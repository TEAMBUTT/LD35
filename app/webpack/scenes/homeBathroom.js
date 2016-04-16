import $ from 'jquery';

import Scene from '../Scene.js';

import homeHallway from '../scenes/homeHallway.js';
import Door from '../entities/Door.js';

import shower from '../entities/homeBathroom/shower.js';
import towel from '../entities/homeBathroom/towel.js';

export class HomeBathroom extends Scene {
  descriptionMessage() {
    const bathroomDoor = new Door(homeHallway);
    const message = `
      The <%= entity("shower", "shower") %> is to your left. a clean
      <%= entity("towel", "towel") %> hanging on the door.
      <br>
      The <%= entity("bathroomDoor", "door back to the hallway") %> is behind you.
    `;

    return this.insertEntities(message, {shower, towel, bathroomDoor});
  }
}

export default new HomeBathroom();
