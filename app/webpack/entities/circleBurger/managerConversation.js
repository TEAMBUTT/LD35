import Entity, { printMessage, action, time, state } from "Entity";

export class ManagerConversation extends Entity {
  name() {
    return "conversation";
  }

  actions() {
    let _actions = [];
    switch (state.manager.progress) {
      case 0:
        _actions.push(action(
          "Apologize.",
          () => {
            state.manager.progress += 1;
            state.currentTime.add(5, "minutes");
            printMessage(`
              You begin to apologize for being so late, but your manager cuts
              you off&hellip;
            `);
          }
        ));
        _actions.push(action(
          "Continue staring blankly.",
          () => {
            state.manager.progress += 1;
            state.currentTime.add(5, "minutes");
            printMessage(`
              After staring at your manager for what feels like an eternity, he
              shakes his head disappointedly.
            `);
          }
        ));
        break;
      case 1:
        _actions.push(action(
          "Nod your head.",
          () => {
            state.manager.progress += 1;
            state.currentTime.add(5, "minutes");
            printMessage("You nod your head.");
            if (!state.wearingHat || state.wearing !== "uniform") {
              printMessage(`
                "That doesn't answer my question! Ugh, nevermind! I've got to go."
              `);
            } else if (state.wearing === "nothing") {
              printMessage(`
                "I don't have time for this! Put some clothes on and get to work!"
              `);
            } else {
              printMessage(`"Good! I'm glad you understand."`);
            }
          }
        ));
        break;
    }
    return _actions;
  }
}

export default new ManagerConversation();

