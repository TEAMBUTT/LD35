import Entity, { printMessage, action, time, state } from "Entity.js";
import { addItem, removeItem, isInInventory } from 'inventory.js';

export class Fryer extends Entity {
  name() {
    return 'deep fryer';
  }

  actions() {
    return [
      action("Fry potato wedges.", () => {
        printMessage(`You put the potato wedges in the ${this.name()}.`);
        printMessage(`Delicious fries come out.`);
        removeItem('potato wedges');
        addItem('fries');
        state.currentTime.add(20, 'minutes');
      }, () => isInInventory("potato wedges"))
    ];
  }
}

export default new Fryer();
