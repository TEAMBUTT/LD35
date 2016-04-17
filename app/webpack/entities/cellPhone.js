import Entity, { printMessage, action, time, state } from "Entity";
import { addItem } from 'inventory';
import texts from './texts';

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
        addItem("cellphone");
      }),
      action("Check time.", () => printMessage(`It is now ${time()}.`)),
      action("Check for notifications.", () => {
        printMessage('You have <%= entity("texts") %>', {texts});
      })
    ];
  }
}

export default new CellPhone();
