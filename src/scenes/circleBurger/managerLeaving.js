import Scene from 'Scene';
import moment from 'moment';
import state from 'state';

import parkingLot from 'scenes/circleBurger/parkingLot';
import diningArea from 'scenes/circleBurger/diningArea';
import entrance from 'scenes/circleBurger/entrance';
import car from 'scenes/car.js';

import Door from 'entities/Door';
import managerConversation from "entities/circleBurger/managerConversation";

export class ManagerLeaving extends Scene {
  name(){ return "ManagerLeaving"; }
  descriptionMessage() {
    const entranceDoor = new Door(entrance, "Walk over.");

    const diff = moment.duration(state.shiftStartTime.diff(state.currentTime)).humanize();

    let message;
    switch (state.manager.progress) {
      case 0:
        message = `
          As you walk up, your manager, Ronald Buss, comes running out of the Circle Burger.
            <br>
          "You're late again," he shouts, "you were supposed be here ${diff} ago!
          I've been covering for you! We uh... lost Trapezoid today too so it's
          been just me and I need to go deal with something."
          <br>
          He sounds enormously exhasperated and his hands are shaking.
          <br>
          <%= entity("managerConversation", "You") %> look blankly at your manager.
        `;
         break;
      case 1:
        message = `
          "This is your last chance. Get in there, help the customers, and lock up or you're through."
          <% if(state.wearing == "nothing") { %>
          <br>"&hellip;are&hellip;are you naked?"
          <br>"For the love of god get dressed!"
          <% } else { %>
            <% if(state.wearing != "uniform") { %>
            <br>"Where's your Uniform?!"
            <% } %>
            <% if(!state.wearingHat) { %>
            <br>"Where's your Hat?!"
            <% } %>
          <% } %>
          <br>
          Once again, <%= entity("managerConversation", "you") %> look blankly at your manager.
        `;
         break;
      case 2:
        state.manager.bailed = true;
        message = `
          He hustles to his truck, jumps in, and speeds off. You're left standing
          at the edge of parking lot, a few steps from
          <%= entity("entranceDoor", "the entrance") %>.
        `;
         break;
    }

    state.currentTime.add(5, 'minutes');

    return this.insertEntities(message, {managerConversation, entranceDoor});
  }
}

export default new ManagerLeaving();
