import Entity, { printMessage, action, time, state } from "Entity";

export default class OpenSign extends Entity {
  constructor(accessible) {
    super();
    this.accessible = accessible;
  }

  name() {
    return 'open sign'
  }

  actions() {
    const accessible = this.accessible;
    return [
      action(
        "Inspect it.", () => {
          if (state.openSignOn) {
            printMessage("Its glowing neon letters spell out \"OPEN\".")
          } else {
            printMessage("Its darkened neon letters spell out \"OPEN\".")
          }
        },
        () => !accessible
      ),
      action(
        "Turn it off.", () => {
          printMessage("You hit the switch on the back of the sign.");
          printMessage("The sign flickers off.");
          state.openSignOn = false;
        },
        () => accessible && state.openSignOn
      )
    ];
  }
}
