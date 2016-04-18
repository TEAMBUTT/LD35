import $ from 'jquery';

import Scene from 'Scene';
import state from 'state';

import homeHallway from 'scenes/homeHallway';

import Door from 'entities/Door';
import shower from 'entities/homeBathroom/shower';
import towel from 'entities/homeBathroom/towel';
import toothbrush from 'entities/homeBathroom/toothbrush';

export class HomeBathroom extends Scene {
  name(){ return "HomeBathroom"; }
  descriptionMessage() {
    const bathroomDoor = new Door(homeHallway, "Enter hallway.);
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
