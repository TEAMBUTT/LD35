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
          printMessage('No time! Do it on your way to work.');
        }
      )
    ];
  }
}

export default new Toothbrush();
