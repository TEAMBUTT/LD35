import Entity, { printMessage, action, state } from "Entity";
import { changeScene } from 'currentScene';
import bathroom from 'scenes/circleBurger/bathroom';

export class DoomDoor extends Entity {
  name() {
    return "door";
  }

  actions() {
    return [
      action(
        "Approach.",
        () => {
          printMessage(`
            You cautiously approach the door. The noises seem to be
            getting louder.
          `);
          printMessage("Cautiously, you knock on the door.");
          printMessage("Dead silence.");
          printMessage("You enter the bathroom to investigate.");
          state.doom.progress += 10; // Progress: 40
          changeScene(bathroom);
        }
      )
    ];
  }
}

export default new DoomDoor();

