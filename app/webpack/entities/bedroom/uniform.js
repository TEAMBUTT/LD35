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
          printMessage('You put on your uniform.');
        }
      )
    ];
  }
}

export default new Uniform();
