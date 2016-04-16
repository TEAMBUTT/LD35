import $ from 'jquery';

import Scene from '../Scene.js';
import bedroom from '../scenes/bedroom.js';
import homeKitchen from '../scenes/homeKitchen.js';
import Door from '../entities/Door.js';

export class HomeHallway extends Scene {
  descriptionMessage() {
    const bedroomDoor = new Door(bedroom);
    const kitchenDoor = new Door(homeKitchen);
    const message = `
      You are in the hallway outside your <%= entity("bedroomDoor", "bedroom") %>. To your left you can see the <%= entity("kitchenDoor", "door to the kitchen") %>.
    `;

    return this.insertEntities(message, {bedroomDoor, kitchenDoor});
  }
}

export default new HomeHallway();
