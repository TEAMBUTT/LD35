import Entity, { printMessage, action, time, state } from "Entity";

export class SandwichBoard extends Entity {
  name() {
    return 'sandwich board'
  }

  actions() {
    return [
      action(
        "Upright.", () => {
          state.uprightedSign = true;
        },
        () => !state.uprightedSign
      )
    ];
  }
}

export default new SandwichBoard();
