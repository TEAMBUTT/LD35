import Scene from 'Scene';

import counter from './counter';
import outBack from './outBack';
import Door from 'entities/Door';

import fryer from 'entities/circleBurger/kitchen/fryer';
import prep from 'entities/circleBurger/kitchen/prep';
import grill from 'entities/circleBurger/kitchen/grill';
import lightSwitch from 'entities/circleBurger/kitchen/lightSwitch';

export class Kitchen extends Scene {
  descriptionMessage() {
    const counterDoor = new Door(counter, "Walk over.");
    const outBackDoor = new Door(outBack, "Go out back.");

    let message;
    if (state.doom.started && state.doom.progress === 20) {
      message = `
        You enter the kitchen. It is bathed in darkness, for some reason the
        lights are turned off. The <%= entity("lightSwitch") %> is on the wall
        to your right.
      `;
    } else {
      message = `
        You are in the disgusting, grungy kitchen of the Circle Burger.
        <br>
        In front of you is the <%= entity('fryer') %> and <%= entity('grill') %>.
        Behind you is the <%= entity('prep') %>.
        There's a folded note with your name on it sitting on the prep station.
        <br>
        Around the corner from you is <%= entity("counterDoor", "the counter") %>.
        The <%= entity("outBackDoor", "back door") %> is behind you.
      `;
    }

    return this.insertEntities(message, {counterDoor, outBackDoor, fryer, prep, grill, lightSwitch});
  }
}

export default new Kitchen();
