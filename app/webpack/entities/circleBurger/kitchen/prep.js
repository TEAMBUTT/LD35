import Entity, { printMessage, action, time, state } from "Entity.js";
import { addItem, removeItem, isInInventory } from 'inventory.js';

export class Prep extends Entity {
  name() {
    return 'prep area';
  }

  actions() {
    return [
      action("Cut potatoes.", () => {
        printMessage("You cut the potato into wedges. You have changed their shape!");
        addItem("potato wedges");
      }),
      action("Get patty.", () => {
        printMessage("You grab a raw patty");
        addItem("raw patty");
      }),
      action("Assemble burger.", () => {
        printMessage("You make a burger from the grilled patty and a bun. Order up!");
        removeItem("grilled patty")
        addItem("burger")
      }, () => isInInventory("grilled patty"))
    ];
  }
}

export default new Prep();
