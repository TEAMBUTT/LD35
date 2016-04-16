import Entity from '../../Entity.js';
import printMessage from '../../printMessage.js';
import action from '../../action.js';
import state from '../../state.js';

export class Uniform extends Entity {
  constructor() {
    super();
  }

  name() {
    return "uniform";
  }

  actions() {
    return [
      action(
        "Put on",
        () => {
          state.wearingUniform = true;
          printMessage('You put on your uniform');
        }
      )
    ];
  }
}

export default new Uniform();
