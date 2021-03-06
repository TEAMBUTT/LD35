import Entity, { printMessage, action, time, state } from "Entity";

export class Towel extends Entity {
  name() {
    return 'towel';
  }

  actions() {
    return [
      action(
        "Dry yourself.",
        () => {
          state.currentTime.add(5, 'minutes');
          if (state.wet) {
            state.wet = false;
            state.bathroomTowel = "damp";
            printMessage('You dry yourself off, thinking, <em>damn, this towel is soft!</em>');
          } else {
            printMessage("You rub the towel against your skin. Nothing happens.");
          }
        },
        () => {
          return state.wearing === "nothing";
        }
      )
    ];
  }
}

export default new Towel();
