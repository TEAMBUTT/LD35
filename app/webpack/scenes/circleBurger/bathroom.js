import Scene from 'Scene';

import diningArea from './diningArea';
import Door from 'entities/Door';

import sink from 'entities/circleBurger/bathroom/sink';
import toilet from 'entities/circleBurger/bathroom/toilet';
import floor from 'entities/circleBurger/bathroom/floor';
import mirror from 'entities/circleBurger/bathroom/mirror';

export class Bathroom extends Scene {
  descriptionMessage() {
    const diningAreaDoor = new Door(diningArea, "Leave room.");

    const message = `
      You're in the bathroom.
      There is a <%= entity('sink')%>, <%= entity('toilet') %>, and <%= entity('floor') %>.
      <% if (state.doom.started && state.doom.progress >= 10) { %>
        A <%= entity("mirror") %> hangs above the sink.
      <% } %>
      <br>
      The <%= entity("diningAreaDoor", "exit") %> is behind you. It is unlocked.
    `;

    return this.insertEntities(message, {diningAreaDoor, sink, toilet, floor, mirror});
  }
}

export default new Bathroom();
