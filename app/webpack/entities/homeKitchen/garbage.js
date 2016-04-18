import Entity, { printMessage, action, time, state } from "Entity";

export class Garbage extends Entity {
  name() {
    return 'garbage';
  }

  actions() {
    return [
      action(
        "Take out the trash.",
        () => {
          state.garbageOutside = true;
          state.currentTime.add(10, 'minutes');

          let message = "";

          if (state.wearing === "nothing") {
            state.confidence -= 5;
            message += `
              The neighboors give you funny looks as you're taking out the
              garbage. It isn't until you're back inside that you realize
              you're naked.
            `;
          } else if (state.luck < 10) {
            state.currentTime.add(20, 'minutes');
            message += `
              As you're taking out the trash, you run into Mr. Spheroid. He
              heckles you about the state of your lawn. What bad luck!
            `;
          } else {
            state.confidence += 5;
            message += `
              As you're taking out the trash, you run into Ms. Cuboid. She
              complements you on your shirt.
            `;
          }

          printMessage(message);
        }
      )
    ];
  }
}

export default new Garbage();
