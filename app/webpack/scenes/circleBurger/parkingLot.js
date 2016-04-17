import Scene from '../../Scene.js';

import car from '../car.js';
import Door from '../../entities/Door.js';
import state from '../../state.js';

export class ParkingLot extends Scene {
  descriptionMessage() {
    const carDoor = new Door(car);

    const message = `
      You are in the Circle Burger parking lot.
      <br>
      Your <%= entity("carDoor", "car") %> is beside you.
      <% if (state.car.running) { %>It is running.<% } %>
    `;

    return this.insertEntities(message, {carDoor});
  }
}

export default new ParkingLot();
