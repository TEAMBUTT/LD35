import Entity, { printMessage, action, time, state } from "../../Entity.js";
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
          printMessage("You look in the oval mirror.");
          printMessage("You are in your <%= entity('clothing') %>.", {clothing});
        }
      ),
      action(
        "Talk.",
        () => {
          printMessage("Mirror mirror on the wall...<br/>It isn't that kind of mirror.");
        }
      ),
      action(
        "Punch.",
        () => {
          printMessage("You smash the mirror. That's 7 years bad luck.");
          state.luck -= 7;
        }
      )
    ];
  }
}

export default new Mirror();
