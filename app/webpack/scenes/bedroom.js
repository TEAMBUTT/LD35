import $ from 'jquery';

import Scene from '../Scene.js';

import alarmClock from '../entities/alarmClock.js';
import bedroomDoor from '../entities/bedroomDoor.js';

class Bedroom extends Scene {
  descriptionMessage() {
    const message = $(`
      <p>
        Your ${alarmClock.placeholder()} is ringing beside you on the bedside table.
        Your uniform is on the floor beside your mirror.

        <br><br>

        ${bedroomDoor.placeholder("Your bedroom door")} is closed, with your
        Circle Burger hat hanging on the doorknob.
      </p>
    `);

    this.insertEntities(message, [alarmClock, bedroomDoor]);

    return message;
  }
}

module.exports = new Bedroom();
