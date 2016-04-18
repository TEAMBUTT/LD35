import Entity, { printMessage, action, time, state } from "Entity";

export class Van extends Entity {
  name() {
    return 'sandwich board'
  }

  actions() {
    return [
      action(
        "Knock on the window.",
        () => {
          printMessage("You see some movement inside the van, but there's no respones.");
          state.currentTime.add(5, 'minutes');
        }
      )
    ];
  }
}

export default new Van();
