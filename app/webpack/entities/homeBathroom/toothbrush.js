import Entity, { printMessage, action, time, state } from "Entity";
import { addItem } from 'inventory';

export class Toothbrush extends Entity {
  name() {
    return 'toothbrush';
  }

  actions() {
    return [
      action("Put it in your pocket.", () => {
        if(addItem("toothbrush")) {
          printMessage("You store the toothbrush in your pocket.");
        }
      }),
      action(
        "Brush your teeth.",
        () => {
          state.nastyBreath = false
          state.confidence += 5;
          printMessage('Your breath is now minty fresh. Take that, gingivitis!');
        }
      )
    ];
  }
}

export default new Toothbrush();
