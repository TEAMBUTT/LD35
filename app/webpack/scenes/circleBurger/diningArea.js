import Scene from '../../Scene.js';

import entrance from './entrance.js';
import Door from '../../entities/Door.js';

export class DiningArea extends Scene {
  descriptionMessage() {
    const entranceDoor = new Door(entrance);

    const message = `
      You are standing in the dining area.
      <br>
      A family of four is eating to your left.
      <br>
      A sad-looking older man is sitting without any food to your right.
      <br>
      Some suspicious looking teenagers are seated at the window.
      <br>
      The <%= entity("entranceDoor", "door to go outside") %> is behind you.
    `;

    return this.insertEntities(message, {entranceDoor});
  }
}

export default new DiningArea();
