import Entity, { printMessage, action, time, state } from "../../../Entity.js";

export class OlderMan extends Entity {
  name() {
    return 'eldery man';
  }

  actions() {
    return [
      action(
        "Give granola bar.", () => {
          _.remove(state.inventory, (v) => v === "granolaBar");
          state.customers.olderManFed = true;
          printMessage("The eldery man takes the granola bar and smiles.");
        },
        () => _.includes(state.inventory, "granolaBar")
      )
    ];
  }
}

export default new OlderMan();
