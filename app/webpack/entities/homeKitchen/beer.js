import Entity, { printMessage, action, time, state } from "../../Entity.js";

export class Beer extends Entity {
  name() {
    return 'Generic beer'
  }

  actions() {
    return [
      action(
        "Consume.",
        () => {
          _.remove(state.fridgeInventory, (v) => v === "beer");
          state.confidence += 5;
          printMessage("Delicious!");
        }
      )
    ];
  }
}

export default new Beer();
