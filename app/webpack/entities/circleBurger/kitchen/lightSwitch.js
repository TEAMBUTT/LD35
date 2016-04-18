import Entity, { printMessage, action, state } from "Entity";

export class LightSwitch extends Entity {
  name() {
    return 'light switch';
  }

  actions() {
    return [
      action(
        "Flip switch.",
        () => {
          state.doom.progress += 10;
          printMessage(`
            You reach over to flip on the light switch. Oddly, it's already in
            the on position. As you turn back around the lights come back on.
            You could swear that one of the shadows takes a little longer to
            dissipate.
          `);
        }
      )
    ];
  }
}

export default new LightSwitch();
