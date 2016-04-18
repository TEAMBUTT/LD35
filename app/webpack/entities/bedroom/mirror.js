import Entity, { printMessage, action, time, state } from "Entity";
import clothing from './clothing.js';

export class Mirror extends Entity {
  constructor() {
    super();
  }

  name() {
    return "mirror";
  }

  actions() {
    return [
      action(
        "Look.",
        () => {
          if(state.mirrorSmashed) {
            printMessage("You look at the smashed mirror.");
          } else {
            printMessage("You look in the oval mirror.");
          }
          printMessage("You are in your <%= entity('clothing') %>.", {clothing});
          state.currentTime.add(5, 'minutes');
        }
      ),
      action(
        "Talk.",
        () => {
          printMessage("Mirror mirror on the wall...<br/>It isn't that kind of mirror.");
          state.currentTime.add(5, 'minutes');
        }
      ),
      action(
        "Punch.",
        () => {
          printMessage("You smash the mirror. That's 7 years bad luck.");
          state.luck -= 7;
          state.mirrorSmashed = true;
          state.currentTime.add(10, 'minutes');
        },
        () => !state.mirrorSmashed
      )
    ];
  }
}

export default new Mirror();
