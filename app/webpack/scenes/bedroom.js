import $ from 'jquery';

import Scene from '../Scene.js';

import alarmClock from '../entities/alarmClock.js';
import bedroomDoor from '../entities/bedroomDoor.js';

export class Bedroom extends Scene {
  descriptionMessage() {
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
