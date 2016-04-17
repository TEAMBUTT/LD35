import Entity, { printMessage, action, time, state } from "../../Entity.js";

export class Toothbrush extends Entity {
  name() {
    return 'toothbrush';
  }

  actions() {
    return [
      action(
        "Brush your teeth.",
        () => {
          state.nastyBreath = false
          printMessage('Your breath is now minty fresh. Take that, gingivitis!');
        }
      )
    ];
  }
}

export default new Toothbrush();
