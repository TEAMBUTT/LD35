import Entity, { printMessage, action, time, state } from "Entity.js";
import { addItem, removeItem, isInInventory } from 'inventory.js';

export class Grill extends Entity {
  name() {
    return 'the grill';
  }

  actions() {
    return [
      action("Grill potato.", () => {
        printMessage("HOT POTATO HOT POTATO HOT POTATO");
        printMessage("You drop the potato");
        removeItem("potato wedges")
      }, () => isInInventory("potato wedges")),

      action("Grill patty.", () => {
        removeItem("raw patty")
        addItem("grilled patty")
      }, () => isInInventory("raw patty"))
    ];
  }
}

export default new Grill();
