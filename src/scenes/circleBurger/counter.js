import Scene from 'Scene';

import diningArea from './diningArea.js';
import kitchen from './kitchen.js';
import Door from 'entities/Door';
import Customer from 'entities/circleBurger/Customer';
import scaredCustomer from 'entities/circleBurger/scaredCustomer';
import till from 'entities/circleBurger/till';
import clock from 'entities/circleBurger/kitchen/clock';
import { nextCustomer } from 'entities/customers';

export class Counter extends Scene {
  name(){ return "Counter"; }
  descriptionMessage() {
    const diningAreaDoor = new Door(diningArea, "Walk over.");
    const kitchenDoor = new Door(kitchen, "Walk back.");

    let customer = nextCustomer();

    const message = `
      The <%= entity('till') %> is in front of you.
      <% if (state.doom.started && state.doom.progress === 20) { %>
        <%= entity("scaredCustomer", "The customer") %> calling to you has a
        worried look on their face.
        <br>
      <% } else { %>
        <% if(customer) { %>
          <%= entity('customer') %> <%= customer.shortDescription %> is waiting to order.
          <%= customer.additionalDescription %>
        <% } %>
      <% } %>
      <br/>
      Behind the counter
      is the <%= entity("diningAreaDoor", "dining area") %>.
      <br>
      The <%= entity("clock") %> on the wall says it is
      <%= state.currentTime.format("hh:mm a") %>.
      <br>
      Behind you is the way to the <%= entity("kitchenDoor", "kitchen") %>.
    `;

    return this.insertEntities(message, {diningAreaDoor, kitchenDoor, customer, scaredCustomer, till, clock});
  }
}

export default new Counter();
