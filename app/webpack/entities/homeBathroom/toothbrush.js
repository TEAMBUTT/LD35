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
          state.currentTime.add(2, 'minutes');
        }
      }),
      action(
        "Brush your teeth.",
        () => {
          state.nastyBreath = false
          state.confidence += 5;
          printMessage('Your breath is now minty fresh. Take that, gingivitis!');
          state.currentTime.add(10, 'minutes');
        }
      )
    ];
  }
}

export default new Toothbrush();
