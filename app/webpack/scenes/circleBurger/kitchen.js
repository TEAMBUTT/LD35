import Scene from 'Scene';

import counter from './counter';
import outBack from './outBack';
import Door from 'entities/Door';

import fryer from 'entities/circleBurger/kitchen/fryer';
import prep from 'entities/circleBurger/kitchen/prep';
import clock from 'entities/circleBurger/kitchen/clock';
import note from 'entities/circleBurger/kitchen/note';
import grill from 'entities/circleBurger/kitchen/grill';
import lightSwitch from 'entities/circleBurger/kitchen/lightSwitch';
import knife from 'entities/circleBurger/kitchen/knife';
import { nextCustomer } from 'entities/customers';

export class Kitchen extends Scene {
  name(){ return "Kitchen"; }
  descriptionMessage() {
    const counterDoor = new Door(counter, "Walk over.");
    const outBackDoor = new Door(outBack, "Go out back.");
    const customer = nextCustomer();

    let message;
    if (state.doom.started && state.doom.progress === 50) {
      message = `
        You enter the kitchen. It is bathed in darkness, for some reason the
        lights are turned off. The <%= entity("lightSwitch") %> is on the wall
        to your right.
      `;
    } else {
      message = `
        You are in the disgusting, grungy kitchen of the Circle Burger.
        <br>
        The <%= entity("clock") %> on the wall says it is
        <%= state.currentTime.format("hh:mm a") %>.
        <br>
        In front of you is the <%= entity('fryer') %> and <%= entity('grill') %>.
        Behind you is the <%= entity('prep') %>.
        <% if (state.doom.started && state.doom.progress == 10 && isInInventory("knife", state.prepInventory)) { %>
          There's a <%= entity('knife') %> sticking up in the cutting board.
        <% } %>
        There's a folded <%= entity('note') %> with your name on it sitting on
        the prep station.
        <br>
        <% if (state.doom.started && state.doom.progress == 20 && isInInventory("knife")) { %>
          There's a customer by <%= entity("counterDoor", "the counter") %> calling to you.
        <% } else if(customer) { %>
          There's <%= customer.indefiniteArticle.toLowerCase() %> waiting to order at <%= entity("counterDoor", "the counter") %>.
        <% } else { %>
          Around the corner from you is <%= entity("counterDoor", "the counter") %>.
        <% } %>
        The <%= entity("outBackDoor", "back door") %> is behind you.
      `;
    }

    return this.insertEntities(message, {
      counterDoor,
      outBackDoor,
      fryer,
      prep,
      grill,
      lightSwitch,
      knife,
      clock,
      customer,
      note
    });
  }
}

export default new Kitchen();
