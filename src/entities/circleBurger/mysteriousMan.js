import Entity, { printMessage, action, state } from "Entity";
import { changeScene } from 'currentScene';
import doomFinish from "scenes/circleBurger/doomFinish";
import finish from "finish";

export class MysteriousStranger extends Entity {
  name() {
    return "mysterious stranger";
  }

  actions() {
    return [
      action(
        "Approach him.",
        () => {
          state.doom.progress += 10; // Progress: 100!
          printMessage(`
            You slowly walk towards the man.
          `);
          printMessage(`
            He turns and you find yourself unable to move.
          `);
          printMessage(`
            Staring back at you are two eyes as black as tar. Laughing gently,
            he smiles at you.
          `);
          changeScene(doomFinish);
          setTimeout(finish, 5000);
        }
      )
    ];
  }
}

export default new MysteriousStranger();
