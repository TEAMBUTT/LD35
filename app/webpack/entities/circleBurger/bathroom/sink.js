import Entity, { printMessage, action, time, state } from "../../../Entity.js";
import { addItem } from '../../../inventory.js';

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
      }),
      action("Wash hands.", () => {
        printMessage('Employees must, and you oblige by washing your hands.');
        state.cleanHands = true;
      })
    ];
  }
}

export default new Sink();
