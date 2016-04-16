import { includes } from 'lodash';
import state from './state.js';
import printMessage from './printMessage.js';

export function isInInventory(item) {
  return includes(state.inventory, item);
};

export function addItem(item) {
  if (state.wearingUniform && !isInInventory(item)) {
    state.inventory.push(item);
    printMessage("You put it in your pocket.");
  } else if (!state.wearingUniform) {
    printMessage("You don't have any pockets.");
  } else {
    printMessage("It's already in your inventory.");
  }
};
