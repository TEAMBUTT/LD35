import $ from 'jquery';

import Scene from 'Scene';

import alarmClock from 'entities/bedroom/alarmClock';
import mirror from 'entities/bedroom/mirror';
import uniform from 'entities/bedroom/uniform';
import pajamas from 'entities/bedroom/pajamas';
import hat from 'entities/bedroom/hat';

import homeHallway from 'scenes/homeHallway';
import Door from 'entities/Door';
import state from 'state';

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
