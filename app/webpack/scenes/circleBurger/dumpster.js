import Scene from 'Scene';

import Door from 'entities/Door';
import state from 'state';

import body from "entities/circleBurger/dumpster/body";
import doomDoor from "entities/circleBurger/dumpster/doomDoor";

export class Dumpster extends Scene {
  descriptionMessage() {
    let message;

    if (state.doom.started && state.doom.progress === 60) {
      state.doom.progress += 10; // Progress: 70
      message = `
        You are standing beside the dumpster. Before you, lies Trapezoid's
        <%= entity("body") %>.
      `;
    } else {
      message = `
        You are standing next to the dumpster. A distant voice is calling you
        back <%= entity("doomDoor", "inside") %>.
      `;
    }

    return this.insertEntities(message, {body, doomDoor});
  }
}

export default new Dumpster();
