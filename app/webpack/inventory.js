import { includes, without } from 'lodash';
import state from './state.js';
import printMessage from './printMessage.js';

export function isInInventory(item) {
  if (state.wearing !== "uniform") {
    return false
  } else {
    return includes(state.inventory, item);
  }
};

export function removeItem(item) {
  state.inventory = without(state.inventory, item);
};

export function addItem(item) {
  if (state.wearing === "uniform" && !isInInventory(item)) {
    state.inventory.push(item);
    printMessage("You put it in your pocket.");
  } else if (state.wearing !== "uniform") {
    printMessage("You don't have any pockets.");
  } else {
    printMessage("It's already in your inventory.");
  }
};
