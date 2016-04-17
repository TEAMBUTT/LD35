import Entity, { printMessage, action, time, state } from "../../Entity.js";

export class Milk extends Entity {
  name() {
    'milk'
  }

  actions() {
    return [
      action(
        "Consume.",
        () => {
          _.remove(state.fridgeInventory, (v) => v === "milk");
          printMessage("Bleh! Probably shouldn't have drank that.");
        }
      )
    ];
  }
}

export default new Milk();
