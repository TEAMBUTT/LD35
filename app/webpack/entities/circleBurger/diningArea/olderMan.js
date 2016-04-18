import Entity, { printMessage, action, time, state } from "Entity";
import { isinInventory, removeItem } from "inventory";

export class OlderMan extends Entity {
  name() {
    return 'eldery man';
  }

  actions() {
    return [
      action(
        "Give granola bar.", () => {
          if (state.doom.started && state.doom.progress === 20) {
            state.doom.progress += 10;
            printMessage(`
              The eldery man won't take the granola bar. His eyes fixated on
              your arm.
            `);
          } else {
            removeItem("granolaBar");
            state.customers.olderManFed = true;
            printMessage("The eldery man takes the granola bar and smiles.");
          }
          state.currentTime.add(15, 'minutes');
        },
        () => isInInventory("granolaBar")
      )
    ];
  }
}

export default new OlderMan();
