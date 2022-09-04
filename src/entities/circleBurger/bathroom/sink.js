import Entity, { printMessage, action, actionWithItem, time, state } from "Entity";
import { isInInventory, addItem, removeItem } from 'inventory';

export class Sink extends Entity {
  name() {
    if(state.sinkClean) {
      return 'clean sink';
    } else {
      return 'dirty sink';
    }
  }

  actions() {
    return [
      action("Clean.", () => {
        printMessage('You clean the sink');
        state.sinkClean = true;
        state.currentTime.add(5, 'minutes');
      }),
      action("Wash hands.", () => {
        printMessage('Employees must, and you oblige by washing your hands.');
        state.cleanHands = true;
        state.currentTime.add(5, 'minutes');
      }),
      action("Brush teeth.", () => {
        state.nastyBreath = false
        state.confidence += 5;
        printMessage('Your breath is now minty fresh. Take that, gingivitis!');
        state.currentTime.add(10, 'minutes');
      }, () => isInInventory('toothbrush')),
      action("Brush teeth.", () => {
        state.nastyBreath = true
        printMessage('Yeeeeeech! You brush your teeth with a dirty toothbrush.');
        state.currentTime.add(10, 'minutes');
      }, () => isInInventory('dirty toothbrush')),
    ];
  }
}

export default new Sink();
