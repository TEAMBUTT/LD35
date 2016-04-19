import Entity, { printMessage, action, time, state } from "Entity";
import { isInInventory, removeItem } from "inventory";

export class OlderMan extends Entity {
  name() {
    return 'eldery man';
  }

  actions() {
    return [
      action(
        "Give granola bar.", () => {
          if (state.doom.started && state.doom.progress === 50) {
            state.doom.progress += 10; // Progress: 60
            printMessage(`
              The eldery man won't take the granola bar. His eyes fixated on
              your arm.
            `);
            printMessage(`
              As you turn away, you hear a strange noise coming from the back
              of the restaurant.
            `);
          } else {
            removeItem("granolaBar");
            state.olderManFed = true;
            printMessage("The eldery man takes the granola bar and smiles.");
          }
          state.currentTime.add(15, 'minutes');
        },
        () => {
          if (state.doom.started) {
            return state.doom.progress === 50;
          } else {
            return isInInventory("granolaBar");
          }
        }
      )
    ];
  }
}

export default new OlderMan();
