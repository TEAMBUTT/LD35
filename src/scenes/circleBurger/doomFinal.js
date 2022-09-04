import Scene from 'Scene';

import mysteriousMan from "entities/circleBurger/mysteriousMan";

export class DoomFinal extends Scene {
  name(){ return "DoomFinal"; }
  descriptionMessage() {
    const message = `
      You are standing in the dining area.
      <br>
      The remaining customers in the store are all staring at you.
      <br>
      Up ahead, you see a <%= entity("mysteriousMan", "man") %>
      dressed all in black.
    `;

    return this.insertEntities(message, {mysteriousMan});
  }
}

export default new DoomFinal();
