import state from 'state';
import { isInInventory, removeItem } from 'inventory';

export function action(label, callback, condition = () => true) {
  return { label, callback, condition };
};

export function actionWithItem(label, item, callback, inventory=state.inventory) {
  return action(label,
      () => {
        removeItem(item, inventory)
        callback();
      }, () => isInInventory(item, inventory));
};

export default action;
