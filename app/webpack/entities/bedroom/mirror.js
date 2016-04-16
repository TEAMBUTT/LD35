import Entity from '../../Entity.js';
import printMessage from '../../printMessage.js';
import action from '../../action.js';
import state from '../../state.js';

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
        "Look",
        () => {
          printMessage("You look in the oval mirror.");
          if(state.wearingUniform) {
            printMessage("You're in your work uniform");
          } else {
            printMessage("You are in your pajamas. Not quite work appropriate");
          }
        }
      ),
      action(
        "Talk",
        () => {
          printMessage("Mirror mirror on the wall...<br/>It isn't that kind of mirror");
        }
      )
    ];
  }
}

export default new Mirror();
