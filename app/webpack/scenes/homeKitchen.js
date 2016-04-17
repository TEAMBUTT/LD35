import $ from 'jquery';

import Scene from '../Scene.js';
import bedroom from '../scenes/bedroom.js';
import homeHallway from '../scenes/homeHallway.js';

import Door from '../entities/Door.js';
import cellPhone from '../entities/cellPhone.js';
import garbage from '../entities/homeKitchen/garbage.js';

export class HomeKitchen extends Scene {
  descriptionMessage() {
    const hallwayDoor = new Door(homeHallway);
    const message = `
      You are in the kitchen. It smells
      <% if (state.garbageOutside) { %>
        okay.
      <% } else { %>
        awful, because you haven't taken your <%= entity("garbage") %> out
        since before last week's crazy bender.
      <% } %>
      The <%= entity("hallwayDoor", "door back to the hallway") %> is behind you.
      <% if (!isInInventory("cellphone")) { %>
        <%= entity("cellPhone", "Your cellphone") %> is on the counter.
      <% } %>
    `;

    return this.insertEntities(message, {garbage, hallwayDoor, cellPhone});
  }
}

export default new HomeKitchen();
