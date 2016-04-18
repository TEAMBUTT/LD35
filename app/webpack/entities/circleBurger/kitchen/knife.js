import Entity, { printMessage, action, actionWithItem, time, state } from "Entity";
import { transferItem, isInInventory } from "inventory";

export class Knife extends Entity {
  name() {
    return "knife";
  }

  actions() {
    return [
      action(
        "Take the knife.",
        () => {
          if (transferItem("knife", state.prepInventory, state.inventory)) {
            state.doom.progress += 10; // Progress: 20
            printMessage("You put the knife in your pocket.");
            state.currentTime.add(5, "minutes");
          }
        },
        () => isInInventory("knife", state.prepInventory)
      )
    ];
  }
}

export default new Knife();

