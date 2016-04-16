import $ from 'jquery';

import Scene from '../Scene.js';
import bedroom from '../scenes/bedroom.js';
import homeHallway from '../scenes/homeHallway.js';
import Door from '../entities/Door.js';
import cellPhone from '../entities/cellPhone.js';
import { isInInventory } from '../inventory.js';

export class HomeKitchen extends Scene {
  descriptionMessage() {
    const hallwayDoor = new Door(homeHallway);
    const message = `
      You are in the kitchen. It smells awful, because you haven't taken your
      garbage out since before last weeks crazy bender. The <%=
      entity("hallwayDoor", "door back to the hallway") %> is behind you.
      <% if (!hasCellPhone()) { %>
        <%= entity("cellPhone", "Your cellphone") %> is on the counter.
      <% } %>
    `;

    return this.insertEntities(message, {hallwayDoor, cellPhone});
  }

  helpers() {
    return {
      hasCellPhone: () => isInInventory(cellPhone)
    }
  }
}

export default new HomeKitchen();
