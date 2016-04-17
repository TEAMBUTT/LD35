import Entity, { printMessage, action, time, state } from "Entity";
import { addItem } from 'inventory';

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
          state.confidence += 5;
          printMessage('Your breath is now minty fresh. Take that, gingivitis!');
        }
      )
    ];
  }
}

export default new Toothbrush();
