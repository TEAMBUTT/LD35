import state from 'state';
import printMessage from 'printMessage';

export function isInInventory(item, inventory = state.inventory) {
  if (inventory == state.inventory && state.wearing !== "uniform") {
    return false;
  } else {
    return inventory.includes(item);
  }
};

export function removeItem(item, origin = state.inventory) {
  const index = origin.indexOf(item);
  if (index > -1) {
    origin.splice(index, 1);
  }
};

export function addItem(item, destination = state.inventory) {
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
