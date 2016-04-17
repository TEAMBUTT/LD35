import Entity, { printMessage, action, time, state } from "Entity";
import { removeItem, transferItem } from 'inventory';

export class GranolaBar extends Entity {
  name() {
    'granola bar'
  }

  actions() {
    return [
      action(
        "Put it in your pocket.",
        () => {
          if (transferItem("granolaBar", state.cupboardsInventory, state.inventory)) {
            printMessage("You store the granola bar in your pocket.");
          }
        }
      ),
      action(
        "Consume.",
        () => {
          removeItem("granolaBar", state.cupboardsInventory);
          printMessage("You chew dejectedly on the dry, bland granola bar.");
        }
      )
    ];
  }
}

export default new GranolaBar();
