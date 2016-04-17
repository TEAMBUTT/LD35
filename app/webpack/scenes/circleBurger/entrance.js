import Scene from '../../Scene.js';

import parkingLot from './parkingLot.js';
import diningArea from './diningArea.js';
import car from '../car.js';
import state from '../../state.js';

import Door from '../../entities/Door.js';
import sandwichBoard from '../../entities/circleBurger/entrance/sandwichBoard.js'

export class Entrance extends Scene {
  descriptionMessage() {
    const parkingLotDoor = new Door(parkingLot, "Go back to your car.");
    const diningAreaDoor = new Door(diningArea);

    const message = `
      You are in standing in front of <%= entity("diningAreaDoor", "the door") %>
      to Circle Burger.
      <br>
      The open sign is lit up and
      <%= entity("sandwichBoard", "the sandwich board") %> advertising "2 for 1
      Super Cylinder Burgers"
      <% if (state.uprightedSign) { %>
        stands nearby.
      <% } else { %>
        has fallen over.
      <% } %>
      <br>
      The <%= entity('parkingLotDoor', 'parking lot') %> is behind you.
    `;

    return this.insertEntities(message, {parkingLotDoor, sandwichBoard, diningAreaDoor});
  }
}

export default new Entrance();
