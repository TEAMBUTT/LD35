import Entity, { printMessage, action, time, state } from "Entity";
import { isInInventory } from "inventory";

export class Arm extends Entity {
  name() {
    return "arm";
  }

  actions() {
    return [
      action(
        "Carve.",
        () => {
          state.doom.progress += 10; // Progress: 50
          printMessage(`
            You carve a pentagram on your arm. As you stare blankly at the
            mutilated flesh, you wonder what possesed you to do this to
            yourself.
          `);
        },
        () => {
          return state.doom.started && state.doom.progress === 40 &&
            isInInventory("knife");
        }
      )
    ];
  }
}

export default new Arm();
