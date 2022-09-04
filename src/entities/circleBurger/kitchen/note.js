import Entity, { printMessage, action, actionWithItem, time, state } from "Entity.js";
import { addItem, removeItem, isInInventory } from 'inventory.js';

export class Note extends Entity {
  name() {
    return 'note';
  }

  actions() {
    return [
      action("Read.", () => {
        printMessage("It's a note from Trapezoid.");
        printMessage(`
          <em>Hey, I hope you get this.</em>
          <br>
          <em>Something really weird has been going on around here. There was a
          crazy guy in the parking lot and Ron hasn't been acting normal. I've
          been hearing noises from the bathroom too.</em>
          <br>
          <em>Anyway, don't forget to lock the door before you leave for the
          night. Ron will definitely fire you if you leave it unlocked
          again.</em>
        `);
      })
    ];
  }
}

export default new Note();
