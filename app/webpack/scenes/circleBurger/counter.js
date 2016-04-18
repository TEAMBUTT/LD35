import { find, negate } from 'lodash';
import Scene from 'Scene';

import diningArea from './diningArea.js';
import kitchen from './kitchen.js';
import Door from 'entities/Door';
import Customer from 'entities/circleBurger/Customer';
import scaredCustomer from 'entities/circleBurger/scaredCustomer';
import till from 'entities/circleBurger/till';

let customers = [
  new Customer({
    indefiniteArticle: 'An old lady',
    definiteArticle: 'the lady',
    shortDescription: ', probably in her nineties, ',
    additionalDescription: "She's tapping her foot impatiently.",
    handle: 'oldLady',
    desiredItem: 'fries',
    dialog: "Old lady: <i>I'd like some fries</i>",
    acceptDialog: "<i>Humph. About time</i>",
  }),

  new Customer({
    indefiniteArticle: 'A guy',
    definiteArticle: 'the guy',
    shortDescription: 'looking confused',
    additionalDescription: "He's staring at the menu like he has never seen one before.",
    handle: 'alien',
    desiredItem: 'burger',
    dialog: `Guy: Hello. Could I have a ham... burger?`,
    acceptDialog: "Guy: <i>Fasinating... I will take this back to my home planet.... I mean to go.</i>",
  }),

  new Customer({
    indefiniteArticle: 'A man',
    definiteArticle: 'the man',
    shortDescription: 'wearing a tinfoil hat',
    additionalDescription: "He's muttering about a way to start the end times. Something about ringing and mirrors.",
    handle: 'tinfoil',
    desiredItem: 'bacon cheese burger',
    dialog: `Man: I need a bacon cheese burger. Quick! There isn't much time left.`,
    acceptDialog: "Guy: <i>There'd better be no granola in this.</i>",
  })
];

export class Counter extends Scene {
  descriptionMessage() {
    const diningAreaDoor = new Door(diningArea, "Walk over.");
    const kitchenDoor = new Door(kitchen, "Walk back.");

    let customer = find(customers, (customer) => !customer.hasBeenServed());

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
      Behind the counter
      is the <%= entity("diningAreaDoor", "dining area") %>.
      <br>
      Behind you is the way to the <%= entity("kitchenDoor", "kitchen") %>.
    `;

    return this.insertEntities(message, {diningAreaDoor, kitchenDoor, customer, scaredCustomer, till});
  }
}

export default new Counter();
