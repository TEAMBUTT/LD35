import Entity, { printMessage, action, time, state } from "Entity";

export class Body extends Entity {
  name() {
    return "body";
  }

  actions() {
    return [
      action(
        "Inspect.",
        () => {
          state.doom.progress += 10; // Progress: 80
          printMessage(`
            As you lean in closer, you notice Trapezoid is not breathing. There
            are strange markings all over his four-sided body.
          `);
          printMessage(`
            You realize the markings all look identical to the pentagram you
            carved into your arm. Horrified, you stumble back from the body.
          `);
        }
      )
    ];
  }
}

export default new Body();
