import Entity, { printMessage, action, time, state } from "Entity";
import uniform from './uniform.js';
import pajamas from './pajamas.js';

export class Clothing extends Entity {
  constructor() {
    super();
  }

  name() {
    if(state.wearing == "uniform") {
      return uniform.name();
    } else if (state.wearing == "pajamas") {
      return pajamas.name();
    } else {
      return "birthday suit";
    }
  }

  actions() {
    return [
      action(
        "Remove.",
        () => {
          printMessage("You strip.");
          state.wearing = "nothing";
          state.currentTime.add(20, "minutes");
        },
        () => (state.wearing != "nothing")
      )
    ];
  }
}

export default new Clothing();
