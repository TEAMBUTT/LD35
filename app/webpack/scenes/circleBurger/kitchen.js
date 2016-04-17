import Scene from 'Scene';

import counter from './counter.js';
import Door from 'entities/Door';

import fryer from 'entities/circleBurger/kitchen/fryer';
import prep from 'entities/circleBurger/kitchen/prep';
import grill from 'entities/circleBurger/kitchen/grill';

export class Kitchen extends Scene {
  descriptionMessage() {
    const counterDoor = new Door(counter, "Walk over.");

    const message = `
      You are in the disgusting, grungy kitchen of the Circle Burger.
      <br>
      In front of you is the <%= entity('fryer') %> and <%= entity('grill') %>.
      Behind you is the <%= entity('prep') %>.
      There's a folded note with your name on it sitting on the prep station.
      <br>
      Around the corner from you is <%= entity("counterDoor", "the counter") %>.
    `;

    return this.insertEntities(message, {counterDoor, fryer, prep, grill});
  }
}

export default new Kitchen();
