import Entity, { printMessage, action, time, state } from "../../Entity.js";

export class Uniform extends Entity {
  constructor() {
    super();
  }

  name() {
    if(state.wetUniform) {
      return "sopping wet uniform";
    } else {
      return "work uniform";
    }
  }

  actions() {
    return [
      action(
        "Put on.",
        () => {
          state.wearing = "uniform";
          printMessage(`You put on your ${this.name()}.`);
          if(state.wet && !state.wetUniform) {
            state.wetUniform = true;
            state.confidence -= 5;
            printMessage("You got it all wet!")
          }
        }
      )
    ];
  }
}

export default new Uniform();
