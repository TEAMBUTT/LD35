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
        if (state.confidence >= 20) {
          _actions.push(action(
            "Ask for a raise.",
            () => {
              state.manager.progress += 1;
              state.currentTime.add(5, "minutes");
              printMessage(`
                Brimming with confidence, you ask your manager for a raise.
              `);
              if (state.luck < 7) {
                printMessage(`
                  Your manager laughs in your face.
                  <br>
                  "You're lucky I don't fire you right now!"
                `);
              } else {
                state.gotRaise = true;
                printMessage(`
                  "What confidence! Today's your lucky day. Let's talk numbers
                  when I get back."
                `);
              }
            }
          ));
        }
        break;
    }
    return _actions;
  }
}

export default new ManagerConversation();

