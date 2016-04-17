import Scene from '../../Scene.js';

import entrance from './entrance.js';
import car from '../car.js';
import Door from '../../entities/Door.js';
import state from '../../state.js';

export class ParkingLot extends Scene {
  descriptionMessage() {
    const carDoor = new Door(car, "Get in car.");
    const entranceDoor = new Door(entrance, "Walk over.");

    const message = `
      You are in the Circle Burger parking lot.
      <br>
      The <%= entity("entranceDoor", "entrance to Circle Burger") %> is up ahead.
      <br>
      Your <%= entity("carDoor", state.car.ruined ? "beaten-up car" : "car") %> is beside you.
      <% if (state.car.running) { %>
        It is running.
      <% } %>
    `;

    return this.insertEntities(message, {carDoor, entranceDoor});
  }
}

export default new ParkingLot();
