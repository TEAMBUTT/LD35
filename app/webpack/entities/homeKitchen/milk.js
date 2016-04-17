import Entity, { printMessage, action, time, state } from "Entity";
import { removeItem } from "inventory";

export class Milk extends Entity {
  name() {
    return 'A jug of milk'
  }

  actions() {
    return [
      action(
        "Consume.", () => {
          removeItem("milk", state.fridgeInventory);
          printMessage("Bleh! Probably shouldn't have drank that.");
        }),
      action(
        "Smell.", () => {
          printMessage("It smells odd, but you can't remember what fresh milk smells like.");
        }
      )
    ];
  }
}

export default new Milk();
