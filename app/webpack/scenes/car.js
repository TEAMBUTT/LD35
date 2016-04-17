import Scene from '../Scene.js';

import garage from './garage.js';
import parkingLot from './circleBurger/parkingLot.js';
import Door from '../entities/Door.js';
import car from '../entities/car.js';
import state from '../state.js';

export class Car extends Scene {
  descriptionMessage() {
    const carDoor = new Door(
      state.car.atWork ? parkingLot : garage,
      "Leave car."
    );

    const message = `
      You are in <%= entity("car", "your car") %>.
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
