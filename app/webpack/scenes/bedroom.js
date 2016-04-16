import $ from 'jquery';

import Scene from '../Scene.js';

import alarmClock from '../entities/alarmClock.js';
import bedroomDoor from '../entities/bedroomDoor.js';

class Bedroom extends Scene {
  descriptionMessage() {
    const message = $(`
      <p>
        Your ${alarmClock.placeholder()} is ringing beside you on the bedside table.
        Your uniform is on the floor beside your mirror. Your
        ${bedroomDoor.placeholder()} is closed, with your Circle Burger hat on hanging
        on the doorknob.
      </p>
    `);

    this.insertEntities(message, [alarmClock, bedroomDoor]);

    return message;
  }
}

module.exports = new Bedroom();
