import $ from 'jquery';

import Scene from '../Scene.js';
import bedroom from '../scenes/bedroom.js';
import bathroom from '../scenes/homeBathroom.js';
import homeKitchen from '../scenes/homeKitchen.js';
import garage from '../scenes/garage.js';
import Door from '../entities/Door.js';

export class HomeHallway extends Scene {
  descriptionMessage() {
    const bedroomDoor = new Door(bedroom);
    const bathroomDoor = new Door(bathroom);
    const kitchenDoor = new Door(homeKitchen);
    const garageDoor = new Door(garage);

    const message = `
      You are in the hallway outside your <%= entity("bedroomDoor", "bedroom") %>.
      <br>
      To your left you can see the <%= entity("kitchenDoor", "door to the kitchen") %>.
      <br>
      You can go into the <%= entity("garageDoor", "garage") %>.
      <br>
      Around the corner and up the stairs is the <%= entity("bathroomDoor", "bathroom") %>.
    `;

    return this.insertEntities(message, {bedroomDoor, bathroomDoor, kitchenDoor, garageDoor});
  }
}

export default new HomeHallway();
