import Entity, { printMessage, action, time, state } from "../../Entity.js";

export class Clothing extends Entity {
  constructor() {
    super();
  }

  name() {
    if (state.wearing == "uniform") {
      return "work uniform";
    } else if (state.wearing == "pajamas") {
      return "pajamas";
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
          state.wearing = "nothing"
        },
        () => (state.wearing != "nothing")
      )
    ];
  }
}

export default new Clothing();
