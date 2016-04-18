import Entity, { printMessage, action, actionWithItem, time, state } from "Entity.js";
import { addItem, removeItem, transferItem, isInInventory } from 'inventory.js';

function convertAction(label, from, to, callback) {
  return actionWithItem(label, from, () => {
    addItem(to, state.prepInventory);
    state.currentTime.add(5, 'minutes');
    callback();
  }, state.prepInventory);
}

function inPrepInventory(item) {
  return isInInventory(item, state.prepInventory);
}

function hasBurger() {
  return _.some(['burger', 'bacon burger', 'cheese burger', 'bacon cheese burger'], inPrepInventory);
}

function hasBurgerOrPatty() {
  return hasBurger() || inPrepInventory("raw patty") || inPrepInventory("grilled patty");
}

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
          state.currentTime.add(15, 'minutes');
        },
        () => {
          return isInInventory("knife") || isInInventory("knife", state.prepInventory);
        }
      ),
      action("Get patty.", () => {
        printMessage("You grab a raw patty");
        addItem('raw patty', state.prepInventory);
        state.currentTime.add(5, 'minutes');
      }, () => !hasBurgerOrPatty()),
      action("Throw out burger.", () => {
        printMessage("You throw the burger in the trash.");
        removeItem("burger");
        removeItem("bacon burger");
        removeItem("cheese burger");
        removeItem("bacon cheese burger");
      }, () => hasBurger()),
      convertAction("Assemble burger", "grilled patty", "burger", () => {
        printMessage("You make a burger from the grilled patty and a bun. Order up!");
      }),
      convertAction("Add bacon to burger", "burger", "bacon burger", () => { printMessage("You add bacon to the burger"); }),
      convertAction("Add cheese to burger", "burger", "cheese burger", () => { printMessage("You add cheese to the burger"); }),
      convertAction("Add cheese to burger", "bacon burger", "bacon cheese burger", () => { printMessage("You add cheese to the burger"); }),
      convertAction("Add bacon to burger", "cheese burger", "bacon cheese burger", () => { printMessage("You add bacon to the burger"); }),
      action(
        "Take the knife.",
        () => {
          if (transferItem("knife", state.prepInventory, state.inventory)) {
            printMessage("You put the knife in your pocket.");
            state.currentTime.add(5, 'minutes');
          }
        },
        () => isInInventory("knife", state.prepInventory)
      )
    ];
  }
}

export default new Prep();
