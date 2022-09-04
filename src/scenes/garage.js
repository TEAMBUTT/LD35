import Scene from 'Scene';

import homeHallway from './homeHallway.js';
import car from './car.js';
import garageDoor from "entities/garageDoor"
import Door from 'entities/Door';
import state from 'state';

export class Garage extends Scene {
  name(){ return "Garage"; }
  descriptionMessage() {
    const hallwayDoor = new Door(homeHallway, "Enter hallway.");
    const carDoor = new Door(car, "Get in car.");

    const message = `
      You are in the garage.
      <br>
      Your <%= entity("carDoor", "car") %>
      <% if (state.car.ruined) { %>
        is ruined. Maybe next time you'll remember to open the garage door first.
      <% } else { %>
        isn't in great shape, but it runs, mostly.
      <% } %>
      <br>
      You can go back to <%= entity("hallwayDoor", "the hallway") %>.
      <br>
      <% if (!state.car.ruined) { %>
        Your <%= entity("garageDoor") %> is ${ state.garageDoorOpen ? "open" : "closed" }.
      <% } %>
    `;

    return this.insertEntities(message, {hallwayDoor, garageDoor, carDoor});
  }
}

export default new Garage();
