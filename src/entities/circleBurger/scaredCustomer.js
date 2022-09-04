import Entity, { printMessage, action, actionWithItem, time, state } from "Entity";

export class ScaredCustomer extends Entity {
  name() {
    return "scared customer";
  }

  actions() {
    return [
      action(
        "Talk.",
        () => {
          state.doom.progress += 10; // Progress: 30
          printMessage(`
            Customer: There's a weird sound coming from the bathroom! It's
            scaring my children.
          `);
          printMessage(`
            You tell him that you'll check it out and he hurries back to his
            family.
          `);
          state.currentTime.add(5, "minutes");
        }
      )
    ];
  }
}

export default new ScaredCustomer();
