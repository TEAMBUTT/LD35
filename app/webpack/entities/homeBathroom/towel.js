import Entity from '../../Entity.js';
import printMessage from '../../printMessage.js';
import action from '../../action.js';
import time from '../../time.js';
import state from '../../state.js';

export class Towel extends Entity {
  name() {
    return 'towel';
  }

  actions() {
    return [
    ];
  }
}

export default new Towel();
