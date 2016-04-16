import Entity, { printMessage, action, time, state } from "../../Entity.js";

export class Shower extends Entity {
  name() {
    return 'shower';
  }

  actions() {
    return [
      action(
        'Wash yourself.',
        () => {
          state.currentTime.add(10, 'minutes');
          let message = "";

          if (state.showered) {
            message += "Again?! Okay . . .<br>"
          }

          if (state.wearing === "uniform") {
            state.wetUniform = true;
            message += "Your uniform is all wet, dummy! Why didn't you take it off?";
          } else {
            message += 'So clean!';
          }

          state.wet = true;
          state.showered = true;
          printMessage(message);
        }
      )
    ];
  }
}

export default new Shower();
