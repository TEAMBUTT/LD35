import Entity, { printMessage, action, time, state } from "Entity";

export class Hat extends Entity {
  name() {
    return "Circle Burger hat"
  }

  actions() {
    return [
      action(
        "Put on.",
        () => {
          printMessage("You put on the hat.")
          state.wearingHat = true;
          state.currentTime.add(2, 'minutes');
        },
        () => !state.wearingHat
      )
    ];
  }
}

export default new Hat();
