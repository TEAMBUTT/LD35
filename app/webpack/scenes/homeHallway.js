import $ from 'jquery';

import Scene from '../Scene.js';
import bedroom from '../scenes/bedroom.js';
import homeKitchen from '../scenes/homeKitchen.js';
import garage from '../scenes/garage.js';
import Door from '../entities/Door.js';

export class HomeHallway extends Scene {
  descriptionMessage() {
    const bedroomDoor = new Door(bedroom);
    const kitchenDoor = new Door(homeKitchen);
    const garageDoor = new Door(garage);

    const message = `
      You are in the hallway outside your <%= entity("bedroomDoor", "bedroom") %>.
      <br>
      To your left you can see the <%= entity("kitchenDoor", "door to the kitchen") %>.
      <br>
      You can go into the <%= entity("garageDoor", "garage") %>.
    `;

    return this.insertEntities(message, {bedroomDoor, kitchenDoor, garageDoor});
  }
}

export default new HomeHallway();
