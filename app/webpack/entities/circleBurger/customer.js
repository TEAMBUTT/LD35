import Entity, { printMessage, action, time, state } from "Entity";
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
      }),
      action("Give burger.", () => {
        printMessage('Humph. About time.');
        removeItem('burger');
        printMessage('The lady gives pays you for the burger.');
        addItem('$10');
        state.oldLadyServerd = true;
      }, () => isInInventory('burger')),
    ];
  }
}

export default new Customer();
