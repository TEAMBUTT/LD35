import Scene from '../Scene.js';

import homeHallway from './homeHallway.js';
import car from './car.js';
import garageDoor from "../entities/garageDoor.js"
import Door from '../entities/Door.js';
import state from '../state.js';

export class Garage extends Scene {
  descriptionMessage() {
    const hallwayDoor = new Door(homeHallway);
    const carDoor = new Door(car, "Get in car.");

    const message = `
      You are in the garage.
      <br>
      Your <%= entity("carDoor", "car") %> isn't in great shape,
      but it runs, mostly.
      <br>
      You can go back to <%= entity("hallwayDoor", "the hallway") %>.
      <br>
      Your <%= entity("garageDoor") %> is ${ state.garageDoorOpen ? "open" : "closed" }.
    `;

    return this.insertEntities(message, {hallwayDoor, garageDoor, carDoor});
  }
}

export default new Garage();
