import Entity, { printMessage, action, time, state } from "Entity";

export class SandwichBoard extends Entity {
  name() {
    return 'sandwich board'
  }

  actions() {
    return [
      action(
        "Put upright.", () => {
          state.uprightedSign = true;
          state.currentTime.add(10, 'minutes');
        },
        () => !state.uprightedSign
      )
    ];
  }
}

export default new SandwichBoard();
