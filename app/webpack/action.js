import { isInInventory, removeItem } from 'inventory';

export function action(label, callback, condition = () => true) {
  return { label, callback, condition };
};

export function actionWithItem(label, item, callback) {
  return action(label,
      () => {
        removeItem(item)
        callback();
      }, () => isInInventory(item));
};

export default action;
