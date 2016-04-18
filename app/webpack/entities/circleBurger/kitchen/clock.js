import Entity, { printMessage, action, time, state } from "Entity";

export class Clock extends Entity {
  constructor() {
    super();
  }

  name() {
    return "clock";
  }

  actions() {
    return [
      action(
        "Stare at the clock until closing.",
        () => {
          state.currentTime = state.closingTime.clone().subtract(5, 'minutes');
        },
        () => state.currentTime.isBefore(
          state.closingTime.clone().subtract(5, 'minutes')
        )
      )
    ];
  }
}

export default new Clock();
