import Scene from 'Scene';

import diningArea from './diningArea.js';
import kitchen from './kitchen.js';
import Door from 'entities/Door';
import customer from 'entities/circleBurger/customer';

export class Counter extends Scene {
  descriptionMessage() {
    const diningAreaDoor = new Door(diningArea, "Walk over.");
    const kitchenDoor = new Door(kitchen, "Walk back.");

    const message = `
      The till is in front of you.
      <% if(!state.oldLadyServerd) { %>
        <%= entity('customer') %>, ${customer.shortDescription()}, is waiting to order.
        ${customer.additionalDescription()}
        Behind her
      <% } else { %>
        Behind the counter
      <% } %>
      is the <%= entity("diningAreaDoor", "dining area") %>.
      <br>
      Behind you is the way to the <%= entity("kitchenDoor", "kitchen") %>.
    `;

    return this.insertEntities(message, {diningAreaDoor, kitchenDoor, customer});
  }
}

export default new Counter();
