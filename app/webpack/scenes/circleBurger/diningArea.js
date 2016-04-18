import Scene from 'Scene';

import entrance from './entrance.js';
import bathroom from './bathroom.js';
import counter from './counter.js';

import Door from 'entities/Door';
import CircleBurgerDoor from 'entities/circleBurger/Door'
import olderMan from 'entities/circleBurger/diningArea/olderMan'
import OpenSign from 'entities/circleBurger/OpenSign'

export class DiningArea extends Scene {
  descriptionMessage() {
    const entranceDoor = new CircleBurgerDoor(entrance, "Leave the Circle Burger.");
    const bathroomDoor = new Door(bathroom);
    const counterDoor = new Door(counter, "Walk around.");
    const openSign = new OpenSign(true)

    const message = `
      You are standing in the dining area.
      <br>
      Ahead of you is <%= entity("counterDoor", "the counter") %>. There's an
      old lady waiting to order.
      <br>
      A family of four is eating to your left.
      <br>
      <% if (state.olderManFed) { %>
        An <%= entity("olderMan", "older man") %> sits contently to your right.
      <% } else { %>
        A sad-looking <%= entity("olderMan", "older man") %> is sitting without
        any food to your right.
      <% } %>
      <br>
      Some suspicious looking teenagers are seated at the window.
      <br>
      The <%= entity("entranceDoor", "door to go outside") %> is behind you.
      <br>
      You can see the <%= entity("bathroomDoor", "bathroom door") %> from here.
      <br>
      The <%= entity("openSign") %> is accessible from here.
    `;

    return this.insertEntities(message, {
      entranceDoor,
      olderMan,
      bathroomDoor,
      counterDoor,
      openSign
    });
  }
}

export default new DiningArea();
