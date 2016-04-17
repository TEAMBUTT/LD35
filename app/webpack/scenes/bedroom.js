import $ from 'jquery';

import Scene from '../Scene.js';

import alarmClock from '../entities/bedroom/alarmClock.js';
import mirror from '../entities/bedroom/mirror.js';
import uniform from '../entities/bedroom/uniform.js';
import pajamas from '../entities/bedroom/pajamas.js';
import hat from '../entities/bedroom/hat.js';

import homeHallway from '../scenes/homeHallway.js';
import Door from '../entities/Door.js';
import state from '../state.js';

export class Bedroom extends Scene {
  descriptionMessage() {
    const bedroomDoor = new Door(homeHallway);
    const message = `
      <div>
        Your <%= entity("alarmClock") %> is ${ state.alarmRinging ? "ringing" : "silent" } beside you on the bedside table.
        Your
        <%= state.wearing != "uniform" ? entity("uniform") : ""  %>
        <%= state.wearing == "nothing" ? "and" : "" %>
        <%= state.wearing != "pajamas" ? entity("pajamas") : ""  %>
        <%= state.wearing == "pajamas" ? "is" : "are" %> on the floor beside your
        <%= entity("mirror") %>.
      </div>
      <div>
        <%= entity("bedroomDoor", "Your bedroom door") %> is
        <% if(!state.wearingHat){ %>
          closed, with your
          <%= entity("hat") %> hanging on the doorknob.
        <% } else { %>
          closed.
        <% } %>
      </div>
    `;

    return this.insertEntities(message, {alarmClock, bedroomDoor, mirror, uniform, pajamas, hat});
  }
}

export default new Bedroom();
