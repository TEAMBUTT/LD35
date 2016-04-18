import Entity, { printMessage, action, state } from "Entity";
import { changeScene } from 'currentScene';
import diningArea from 'scenes/circleBurger/diningArea';

export class DoomDoor extends Entity {
  name() {
    return "door";
  }

  actions() {
    return [
      action(
        "Follow the voice.",
        () => {
          state.doom.progress += 10; // Progress: 90
          printMessage(`
            You make your way back through the kitchen, past the counter to the
            dining area.
          `);
          changeScene(diningArea);
        }
      )
    ];
  }
}

export default new DoomDoor();

