import Entity, { printMessage, action, actionWithItem, time, state } from "Entity.js";
import { addItem, removeItem, isInInventory } from 'inventory.js';

export class Fryer extends Entity {
  name() {
    return 'deep fryer';
  }

  actions() {
    return [
      actionWithItem("Fry potato wedges.", "potato wedges", () => {
        printMessage(`You put the potato wedges in the ${this.name()}.`);
        printMessage(`Delicious fries come out.`);
        addItem('fries', state.prepInventory);
        state.currentTime.add(20, 'minutes');
      }, state.prepInventory)
    ];
  }
}

export default new Fryer();
