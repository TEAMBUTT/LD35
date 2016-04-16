import Entity, { printMessage, action, time, state } from "../../Entity.js";

export class Clothing extends Entity {
  constructor() {
    super();
  }

  name() {
    if (state.wearing == "uniform") {
      return "your work uniform";
    } else if (state.wearing == "pajamas") {
      return "your pajamas";
    } else {
      return "your birthday suit";
    }
  }

  actions() {
    return [
      action(
        "Remove.",
        () => {
          printMessage("You strip.");
          state.wearing = "nothing"
        },
        () => (state.wearing != "nothing")
      )
    ];
  }
}

export default new Clothing();
