import Entity, { printMessage, action, time, state } from "../Entity.js";

export class AlarmClock extends Entity {
  constructor() {
    super();
  }

  name() {
    return "garage door";
  }

  actions() {
    return [
      action(
        "Open.",
        () => {
          state.garageDoorOpen = true;
          printMessage("You open the garage door. It's a nice day out.");
        },
        () => !state.garageDoorOpen
      ),
      action(
        "Close.",
        () => {
          state.garageDoorOpen = false;
          printMessage("For some reason, you close the garage door again.");
        },
        () => state.garageDoorOpen
      )
    ];
  }
}

export default new AlarmClock();
