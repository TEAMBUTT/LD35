import Entity, { printMessage, action, actionWithItem, time, state } from "Entity.js";
import { addItem, removeItem, transferItem, isInInventory } from 'inventory.js';

export class Prep extends Entity {
  name() {
    return 'prep area';
  }

  actions() {
    return [
      action(
        "Cut potatoes.",
        () => {
          printMessage("You cut the potato into wedges. You have changed their shape!");
          addItem("potato wedges", state.prepInventory);
        },
        () => {
          return isInInventory("knife") || isInInventory("knife", state.prepInventory);
        }
      ),
      action("Get patty.", () => {
        printMessage("You grab a raw patty");
        addItem("raw patty", state.prepInventory);
      }),
      actionWithItem("Assemble burger.", "grilled patty", () => {
        printMessage("You make a burger from the grilled patty and a bun. Order up!");
        addItem("burger", state.prepInventory)
      }, state.prepInventory),
      action(
        "Take the knife.",
        () => {
          if (transferItem("knife", state.prepInventory, state.inventory)) {
            printMessage("You put the knife in your pocket.");
          }
        },
        () => isInInventory("knife", state.prepInventory)
      )
    ];
  }
}

export default new Prep();
