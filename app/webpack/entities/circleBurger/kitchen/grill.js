import Entity, { printMessage, action, actionWithItem, time, state } from "Entity.js";
import { addItem, removeItem, isInInventory } from 'inventory.js';

export class Grill extends Entity {
  name() {
    return 'the grill';
  }

  actions() {
    return [
      actionWithItem("Grill potato.", "potato wedges", () => {
        printMessage("HOT POTATO HOT POTATO HOT POTATO");
        printMessage("You drop the potato");
        state.currentTime.add(10, 'minutes');
      }),

      actionWithItem("Grill patty.", "raw patty", () => {
        addItem("grilled patty")
        state.currentTime.add(15, 'minutes');
      })
    ];
  }
}

export default new Grill();
