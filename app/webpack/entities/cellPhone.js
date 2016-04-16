import Entity, { printMessage, action, time, state } from "../Entity.js";
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
        addItem(this)
      }),
      action("Check time.", () => printMessage(`It is now ${time()}.`)),
      action("Check for notificatoins.", () => printMessage('You have 3 unread texts.'))
    ];
  }
}

export default new CellPhone();
