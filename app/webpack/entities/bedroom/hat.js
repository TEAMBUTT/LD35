import Entity, { printMessage, action, time, state } from "../../Entity.js";

export class Hat extends Entity {
  name() {
    return "Circle Burger hat"
  }

  actions() {
    return [
      action(
        "Put on.",
        () => { state.wearingHat = true; },
        () => !state.wearingHat
      )
    ];
  }
}

export default new Hat();
