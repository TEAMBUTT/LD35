import Entity, { printMessage, action, time, state } from "Entity.js";
import { addItem, removeItem, isInInventory } from 'inventory.js';

export class Fryer extends Entity {
  name() {
    return 'deep fryer';
  }

  actions() {
    return [
      action("Fry potato wedges.", () => {
        removeItem('potato wedges');
        addItem('fries');
      }, () => isInInventory("potato wedges"))
    ];
  }
}

export default new Fryer();
