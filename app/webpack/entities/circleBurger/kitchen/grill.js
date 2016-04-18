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
      }, state.prepInventory),

      actionWithItem("Grill patty.", "raw patty", () => {
        printMessage("You grill a patty.");
        addItem("grilled patty", state.prepInventory);
        state.currentTime.add(15, 'minutes');
      }, state.prepInventory)
    ];
  }
}

export default new Grill();
