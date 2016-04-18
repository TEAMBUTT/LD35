import Entity, { printMessage, action, time, state } from "Entity";
import arm from "entities/arm";

export class Mirror extends Entity {
  name() {
    return "mirror";
  }

  actions() {
    return [
      action(
        "Look.",
        () => {
          if (state.doom.progress === 10) {
            printMessage(`
              You look at your reflection in the mirror. There appears to be
              something on your <%= entity("arm") %>.
            `, {arm});
          } else {
            printMessage("You can't quite bring yourself to look at your reflection.");
          }
          state.currentTime.add(5, 'minutes');
        },
        () => {
          return state.doom.started && state.doom.progress >= 10;
        }
      )
    ];
  }
}

export default new Mirror();
