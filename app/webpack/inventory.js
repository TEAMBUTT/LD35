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
  if (state.wearing === "uniform") {
    state.inventory.push(item);
    return true;
  } else {
    printMessage("You can't store that. You don't have any pockets.");
    return false;
  }
};
