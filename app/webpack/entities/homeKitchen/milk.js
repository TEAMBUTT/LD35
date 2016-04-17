import Entity, { printMessage, action, time, state } from "../../Entity.js";

export class Milk extends Entity {
  name() {
    return 'Milk'
  }

  actions() {
    return [
      action(
        "Consume.", () => {
          _.remove(state.fridgeInventory, (v) => v === "milk");
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