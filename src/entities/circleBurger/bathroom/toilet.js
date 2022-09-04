import Entity, { printMessage, action, time, state } from "Entity";
import { isInInventory, removeItem, addItem } from 'inventory';

export class Toilet extends Entity {
  name() {
    if(state.toiletVeryClean) {
      return 'sparkling clean toilet';
    } else if(state.toiletClean) {
      return 'clean toilet';
    } else {
      return 'dirty toilet';
    }
  }

  actions() {
    return [
      action("Clean.", () => {
        printMessage('You clean the toilet');
        state.toiletClean = true;
        if(isInInventory("toothbrush")) {
          state.toiletVeryClean = true;
          printMessage('You use the toothbrush to really scrub it clean.');
          removeItem('toothbrush')
          addItem('dirty toothbrush')
        }
      }),
      action("Wash hands.", () => {
        printMessage('You wash your hands in the toilet.');
        printMessage('Ummm. I suppose that works.');
        state.cleanHands = false;
      })
    ];
  }
}

export default new Toilet();
