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
            state.currentTime.add(5, 'minutes');
          }
        }
      ),
      action(
        "Consume.",
        () => {
          removeItem("granolaBar", state.cupboardsInventory);
          printMessage("You chew dejectedly on the dry, bland granola bar.");
          state.currentTime.add(10, 'minutes');
        }
      )
    ];
  }
}

export default new GranolaBar();
