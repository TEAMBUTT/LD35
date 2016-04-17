import Entity, { printMessage, action, time, state } from "../../Entity.js";
import { addItem } from '../../inventory.js';

export class GranolaBar extends Entity {
  name() {
    'granola bar'
  }

  actions() {
    return [
      action(
        "Put it in your pocket.",
        () => {
          _.remove(state.cupboardsInventory, (v) => v === "granolaBar");
          addItem("granolaBar");
        }
      ),
      action(
        "Consume.",
        () => {
          _.remove(state.cupboardsInventory, (v) => v === "granolaBar");
          printMessage("You chew dejectedly on the dry, bland granola bar.");
        }
      )
    ];
  }
}

export default new GranolaBar();
