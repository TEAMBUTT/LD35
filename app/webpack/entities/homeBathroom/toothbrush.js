import Entity, { printMessage, action, time, state } from "../../Entity.js";
import { addItem } from '../../inventory.js';

export class Toothbrush extends Entity {
  name() {
    return 'toothbrush';
  }

  actions() {
    return [
      action("Put it in your pocket.", () => {
        addItem("toothbrush");
      }),
      action(
        "Brush your teeth.",
        () => {
          state.nastyBreath = false
          printMessage('Your breath is now minty fresh. Take that, gingivitis!');
        }
      )
    ];
  }
}

export default new Toothbrush();
