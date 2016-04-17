import Entity from '../../Entity.js';
import printMessage from '../../printMessage.js';
import action from '../../action.js';
import state from '../../state.js';

export class Pajamas extends Entity {
  constructor() {
    super();
  }

  name() {
    if(state.wetPajamas) {
      return "sopping wet pajamas";
    } else {
      return "pajamas";
    }
  }

  actions() {
    return [
      action(
        "Put on",
        () => {
          state.wearing = "pajamas";
          printMessage(`You put your ${this.name()} back on. Going to bed?`);
          if(state.wet && !state.wetPajamas) {
            state.wetPajamas = true;
            printMessage("You got them all wet!")
          }
        }
      )
    ];
  }
}

export default new Pajamas();
