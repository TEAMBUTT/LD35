import Scene from 'Scene';

import kitchen from './kitchen.js';
import dumpster from "scenes/circleBurger/dumpster";
import Door from 'entities/Door';

export class OutBack extends Scene {
  descriptionMessage() {
    const kitchenDoor = new Door(kitchen, "Go back inside.");
    const dumpsterDoor = new Door(dumpster, "Approach.");

    const message = `
      <% if (state.doom.started && state.doom.progress === 60) { %>
        The weather outside has darkened considerably.
        <br>
      <% } %>
      You are standing behind the Circle Burger, beside the dumpsters. It
      smells awful. Trapezoid's car-shaped automobile is still parked here for
      some reason.
      <br>
      <% if (state.doom.started && state.doom.progress === 60) { %>
        Out of the corner of your eye, you notice a red puddle forming near
        <%= entity("dumpsterDoor", "the dumpster") %>.
        <br>
      <% } %>
      The <%= entity("kitchenDoor", "door to go back inside") %> is behind you.
    `;

    return this.insertEntities(message, {kitchenDoor, dumpsterDoor});
  }
}

export default new OutBack();
