import $ from 'jquery';

import Scene from '../Scene.js';

import alarmClock from '../entities/alarmClock.js';
import homeHallway from '../scenes/homeHallway.js';
import Door from '../entities/Door.js';

export class Bedroom extends Scene {
  descriptionMessage() {
    const bedroomDoor = new Door(homeHallway);
    const message = `
      <div>
        Your <%= entity("alarmClock") %> is ringing beside you on the bedside
        table. Your uniform is on the floor beside your mirror.
      </div>
      <div>
        <%= entity("bedroomDoor", "Your bedroom door") %> is closed, with your
        Circle Burger hat on hanging on the doorknob.
      </div>
    `;

    return this.insertEntities(message, {alarmClock, bedroomDoor});
  }
}

export default new Bedroom();
