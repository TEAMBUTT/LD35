import Entity, { printMessage, action, actionWithItem, time, state } from "Entity";
import { addItem, removeItem, isInInventory } from 'inventory.js';

export class Customer extends Entity {
  name() {
    return 'An old lady';
  }

  shortDescription() {
    return 'probably in her ninteties';
  }

  additionalDescription() {
    return `She's tapping her foot impatiently.`;
  }

  handle() {
    'oldLady'
  }

  actions() {
    return [
      action("Talk.", () => {
        printMessage('Old lady: I want a hamburger.');
        state.currentTime.add(5, 'minutes');
      }),

      actionWithItem("Give fries.", "fries", () => {
        printMessage(`I didn't ask for this`);
        printMessage(`The lady storms off`);
        state.oldLadyServerd = true;
        state.currentTime.add(5, 'minutes');
      }, state.prepInventory),

      actionWithItem("Give burger.", "burger", () => {
        printMessage('Humph. About time.');
        printMessage('The lady gives pays you for the burger.');
        addItem('$10');
        state.oldLadyServerd = true;
        state.currentTime.add(5, 'minutes');
      }, state.prepInventory),
    ];
  }
}

export default new Customer();
