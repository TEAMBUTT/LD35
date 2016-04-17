import Entity, { printMessage, action, time, state } from "Entity";
import { removeItem } from "inventory";

export class Beer extends Entity {
  name() {
    return 'A can of generic beer'
  }

  actions() {
    return [
      action(
        "Consume.",
        () => {
          removeItem("beer", state.fridgeInventory);
          state.confidence += 5;
          printMessage("Delicious!");
        }
      )
    ];
  }
}

export default new Beer();
