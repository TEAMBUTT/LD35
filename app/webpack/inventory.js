import { includes, remove } from 'lodash';
import state from 'state';
import printMessage from 'printMessage';

export function isInInventory(item, inventory) {
  inventory = inventory || state.inventory;
  if (inventory == state.inventory && state.wearing !== "uniform") {
    return false;
  } else {
    return includes(inventory, item);
  }
};

export function removeItem(item, origin) {
  origin = origin || state.inventory
  remove(origin, (v) => v === item);
};

export function addItem(item, destination) {
  destination = destination || state.inventory
  if (destination == state.inventory) {
    if (state.wearing === "uniform") {
      destination.push(item);
      return true;
    } else {
      printMessage("You can't store that. You don't have any pockets.");
      return false;
    }
  } else {
    destination.push(item);
    return true;
  }
};

export function transferItem(item, origin, destination) {
  if (addItem(item, destination)) {
    removeItem(item, origin);
    return true;
  }
};
