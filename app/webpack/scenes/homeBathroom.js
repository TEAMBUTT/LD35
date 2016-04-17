import $ from 'jquery';

import Scene from '../Scene.js';
import state from '../state.js';

import homeHallway from '../scenes/homeHallway.js';

import Door from '../entities/Door.js';
import shower from '../entities/homeBathroom/shower.js';
import towel from '../entities/homeBathroom/towel.js';
import toothbrush from '../entities/homeBathroom/toothbrush.js';

export class HomeBathroom extends Scene {
  descriptionMessage() {
    const bathroomDoor = new Door(homeHallway);
    const message = `
      The <%= entity("shower", "shower") %> is to your left. a ${ state.bathroomTowel }
      <%= entity("towel", "towel") %> hanging on the door.
      <% if (!isInInventory("toothbrush")) { %>
        A <%= entity("toothbrush") %> sits next to the sink on your right.
      <% } %>
      <br>
      The <%= entity("bathroomDoor", "door back to the hallway") %> is behind you.
    `;

    return this.insertEntities(message, {shower, towel, toothbrush, bathroomDoor});
  }
}

export default new HomeBathroom();
