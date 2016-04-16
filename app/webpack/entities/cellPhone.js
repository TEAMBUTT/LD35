import Entity from '../Entity.js';
import printMessage from '../printMessage.js';
import action from '../action.js';
import time from '../time.js';
import state from '../state.js';
import { addItem } from '../inventory.js';

export class CellPhone extends Entity {
  constructor() {
    super();
  }

  name() {
    return "cell phone";
  }

  actions() {
    return [
      action("Put it in your pocket.", () => {
        addItem(self)
      }),
      action("Check time.", () => { printMessage(`It is now ${time()}.`) })
    ];
  }
}

export default new CellPhone();
