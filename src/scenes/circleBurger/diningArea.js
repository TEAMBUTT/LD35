import Scene from 'Scene';

import entrance from './entrance.js';
import bathroom from './bathroom.js';
import counter from './counter.js';

import Door from 'entities/Door';
import CircleBurgerDoor from 'entities/circleBurger/Door'
import doomDoor from 'entities/circleBurger/diningArea/doomDoor'
import olderMan from 'entities/circleBurger/diningArea/olderMan'
import clock from 'entities/circleBurger/kitchen/clock'
import OpenSign from 'entities/circleBurger/OpenSign'
import { nextCustomer } from 'entities/customers';

export class DiningArea extends Scene {
  name(){ return "DiningArea"; }
  descriptionMessage() {
    const entranceDoor = new CircleBurgerDoor(entrance, "Leave the Circle Burger.");
    const bathroomDoor = new Door(bathroom, "Enter bathroom.");
    const counterDoor = new Door(counter, "Walk around.");
    const openSign = new OpenSign(true);
    let customer = nextCustomer();

    const message = `
      You are standing in the dining area. The <%= entity("clock") %> shows <%= state.currentTime.format("hh:mm a") %>.
      <br>
      Ahead of you is <%= entity("counterDoor", "the counter") %>.
      <% if(customer) { %>
        There's <%= customer.indefiniteArticle.toLowerCase() %> waiting to order.
      <% } %>
      <% if (state.currentTime.isBefore(state.familyLeavesTime)) { %>
        <br>
        A family of four is eating to your left.
      <% } %>
      <% if (state.olderManFed) { %>
        An <%= entity("olderMan", "older man") %> sits contently to your right.
      <% } else { %>
        A sad-looking <%= entity("olderMan", "older man") %> is sitting without
        any food to your right.
        <% if (state.doom.started && state.doom.progress === 50) { %>
          You feel compelled to interact with him.
        <% } %>
      <% } %>
      <% if (state.currentTime.isBefore(state.teensLeaveTime)) { %>
        Some suspicious looking teenagers are seated at the window.
      <% } %>
      <br>
      The <%= entity("entranceDoor", "door to go outside") %> is behind you.
      <br>
      <% if (state.doom.started && state.doom.progress === 30) { %>
        The <%= entity("doomDoor", "bathroom door") %> is down the hall. You
        can hear the strange, gutteral sounds from where you're standing.
      <% } else { %>
        You can see the <%= entity("bathroomDoor", "bathroom door") %> from here.
      <% } %>
      <br>
      The <%= entity("openSign") %> is accessible from here.
    `;

    return this.insertEntities(message, {
      entranceDoor,
      olderMan,
      bathroomDoor,
      counterDoor,
      doomDoor,
      openSign,
      customer,
      clock
    });
  }
}

export default new DiningArea();
