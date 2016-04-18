import Entity, { printMessage, action, state } from 'Entity';

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
        "Put on.",
        () => {
          state.wearing = "pajamas";
          printMessage(`You put your ${this.name()} back on. Going to bed?`);
          if(state.wet && !state.wetPajamas) {
            state.wetPajamas = true;
            state.confidence -= 5;
            printMessage("You got them all wet!")
          }
          state.currentTime.add(5, 'minutes');
        }
      )
    ];
  }
}

export default new Pajamas();
