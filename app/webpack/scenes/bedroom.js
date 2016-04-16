import $ from 'jquery';

import Scene from '../Scene.js';

import alarmClock from '../entities/bedroom/alarmClock.js';
import mirror from '../entities/bedroom/mirror.js';
import uniform from '../entities/bedroom/uniform.js';

import homeHallway from '../scenes/homeHallway.js';
import Door from '../entities/Door.js';
import state from '../state.js';

export class Bedroom extends Scene {
  descriptionMessage() {
    const bedroomDoor = new Door(homeHallway);
    const message = `
      <div>
        Your <%= entity("alarmClock") %> is ${ state.alarmRinging ? "ringing" : "silent" } beside you on the bedside table.
        <% if(state.wearing !== "uniform") { %>Your <%= entity("uniform") %> is on the floor beside <% } else { %> On the floor is <% } %> your <%= entity("mirror") %>.
      </div>
      <div>
        <%= entity("bedroomDoor", "Your bedroom door") %> is closed, with your
        Circle Burger hat on hanging on the doorknob.
      </div>
    `;

    return this.insertEntities(message, {alarmClock, bedroomDoor, mirror, uniform});
  }
}

export default new Bedroom();
