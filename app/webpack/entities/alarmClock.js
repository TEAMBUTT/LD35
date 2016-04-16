import Entity from '../Entity.js';
import printMessage from '../printMessage.js';
import action from '../action.js';
import time from '../time.js';

export class AlarmClock extends Entity {
  constructor() {
    super();
    this.ringing = true;
  }

  name() {
    return "alarm clock";
  }

  actions() {
    if(this.ringing) {
      return [
        action("Snooze", () => {
          printMessage(`You sleep for another 5 minutes before the alarm clock rings again. It's now ${time()}.`);
        }),
        action("Turn if off.", () => {
          this.ringing = false;
          printMessage('You turn the alarm clock off.');
        })
      ];
    } else {
      return [];
    }
  }
}

export default new AlarmClock();
