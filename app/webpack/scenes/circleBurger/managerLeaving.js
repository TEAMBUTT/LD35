import Scene from '../../Scene.js';
import moment from 'moment';

import parkingLot from './parkingLot.js';
import diningArea from './diningArea.js';
import car from '../car.js';
import state from '../../state.js';

import Door from '../../entities/Door.js';
import entrance from './entrance.js';

export class ManagerLeaving extends Scene {
  descriptionMessage() {
    const entranceDoor = new Door(entrance, "Walk over.");

    const diff = moment.duration(state.shiftStartTime.diff(state.currentTime)).humanize();

    const message = `
      As you walk up, your manager, Ronald Buss, comes running out of the Circle Burger.
      <br>
      "You're late again," he shouts, "you were supposed be here ${diff} ago!
      I've been covering for you! We uh... lost Trapezoid today too so it's
      been just me and I need to go deal with something."
      <br>
      He sounds enormously exhasperated and his hands are shaking.
      <br>
      "This is your last chance. Get in there help the customers and lock up or you're through.
      <% if(state.wearing == "nothing") { %>
      <br>&hellip;are&hellip;are you naked?
      <br>For the love of god get dressed!
      <% } else { %>
        <% if(state.wearing != "uniform") { %>
        <br>"Where's your Uniform?!"
        <% } %>
        <% if(!state.wearingHat) { %>
        <br>"Where's your Hat?!"
        <% } %>
      <% } %>
      <br>
      He hustles to his truck, jumps in, and speeds off. You're left standing
      at the edge of parking lot, a few steps from
      <%= entity("entranceDoor", "the entrance") %>.
    `;

    state.managerBailed = true;
    state.currentTime.add(15, 'minutes');

    return this.insertEntities(message, {entranceDoor});
  }
}

export default new ManagerLeaving();
