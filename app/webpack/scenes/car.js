import Scene from 'Scene';

import garage from './garage.js';
import parkingLot from './circleBurger/parkingLot.js';
import Door from 'entities/Door';
import car from 'entities/car';
import state from 'state';

export class Car extends Scene {
  descriptionMessage() {
    const carDoor = new Door(
      state.car.atWork ? parkingLot : garage,
      "Leave car."
    );

    const message = `
      You are in <%= entity("car", state.car.ruined ? "your dented car" : "your car") %>.
      You can <%= entity("carDoor", "get out") %>.
      <% if (state.car.running) { %>
        The car is running.
      <% } else { %>
        The car is not running.
      <% } %>
    `;

    return this.insertEntities(message, {carDoor, car});
  }
}

export default new Car();
