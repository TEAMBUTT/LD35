import Entity from '../../Entity.js';
import printMessage from '../../printMessage.js';
import action from '../../action.js';
import time from '../../time.js';
import state from '../../state.js';

export class Shower extends Entity {
  name() {
    return 'shower';
  }

  actions() {
    return [
      action(
        'Wash yourself.',
        () => {
          state.currentTime.add(10, 'minutes');
          printMessage('Bleh!');
        }
      )
    ];
  }
}

export default new Shower();
