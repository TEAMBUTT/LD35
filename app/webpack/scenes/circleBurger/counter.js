import { find, negate } from 'lodash';
import Scene from 'Scene';

import diningArea from './diningArea.js';
import kitchen from './kitchen.js';
import Door from 'entities/Door';
import Customer from 'entities/circleBurger/Customer';

let customers = [
  new Customer({
    indefiniteArticle: 'An old lady',
    definiteArticle: 'the lady',
    shortDescription: 'probably in her nineties',
    additionalDescription: "She's tapping her foot impatiently.",
    handle: 'oldLady',
    desiredItem: 'cheese burger',
    dialog: "Old lady: <i>I'd like a cheeseburger</i>",
    acceptDialog: "<i>Humph. About time</i>",
  }),

  new Customer({
    indefiniteArticle: 'A guy',
    definiteArticle: 'the guy',
    shortDescription: 'looking confused',
    additionalDescription: "He's staring at the menu like he has never seen one before.",
    handle: 'alien',
    desiredItem: 'burger',
    dialog: `Guy: Hello. Could I have a ham..... burger?`,
    acceptDialog: "Guy: <i>Fasinating... I will take this back to my home planet.... I mean to go.</i>",
  })
];

export class Counter extends Scene {
  descriptionMessage() {
    const diningAreaDoor = new Door(diningArea, "Walk over.");
    const kitchenDoor = new Door(kitchen, "Walk back.");

    let customer = find(customers, (customer) => !customer.hasBeenServed());

    const message = `
      The till is in front of you.
      <% if(customer) { %>
        <%= entity('customer') %>, <%= customer.shortDescription %>, is waiting to order.
        <%= customer.additionalDescription %>
      <% } %>
      Behind the counter
      is the <%= entity("diningAreaDoor", "dining area") %>.
      <br>
      Behind you is the way to the <%= entity("kitchenDoor", "kitchen") %>.
    `;

    return this.insertEntities(message, {diningAreaDoor, kitchenDoor, customer});
  }
}

export default new Counter();
