import Entity, { printMessage, action, time, state } from "Entity";
import { addItem, isInInventory } from 'inventory';
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
      action(
        "Check time.",
        () => {
          if (state.mirrorSmashed && state.alarmRinging && state.showered &&
              isInInventory("granolaBar") && !state.doom.started) {
            state.doom.started = true;
            printMessage("It is now 6:66pm.");
          } else {
            printMessage(`It is now ${time()}.`)
          }
        }
      ),
      action("Check for notifications.", () => {
        printMessage('You have <%= entity("texts") %>', {texts});
      })
    ];
  }
}

export default new CellPhone();
