import Entity, { printMessage, action, state } from "Entity";
import { addItem, isInInventory } from 'inventory';
import texts from './texts';
import { currentTime } from 'time';

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
          if (state.mirrorSmashed && state.alarmRinging &&
              isInInventory("granolaBar") && !state.doom.started) {
            state.doom.started = true;
            printMessage("It is now 6:66pm. Weird.");
          } else {
            printMessage(`It is now ${currentTime()}.`)
          }
          state.currentTime.add(5, 'minutes');
        }
      ),
      action("Check for notifications.", () => {
        printMessage('You have <%= entity("texts") %>.', {texts});
        state.currentTime.add(2, 'minutes');
      })
    ];
  }
}

export default new CellPhone();
