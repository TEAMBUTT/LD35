import $ from 'jquery';

import Scene from 'Scene';
import bedroom from 'scenes/bedroom';
import bathroom from 'scenes/homeBathroom';
import homeKitchen from 'scenes/homeKitchen';
import garage from 'scenes/garage';
import Door from 'entities/Door';

export class HomeHallway extends Scene {
  name(){ return "HomeHallway"; }
  descriptionMessage() {
    const bedroomDoor = new Door(bedroom, "Enter bedroom.");
    const bathroomDoor = new Door(bathroom, "Enter bathroom.");
    const kitchenDoor = new Door(homeKitchen, "Enter kitchen.");
    const garageDoor = new Door(garage, "Enter garage.");

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
