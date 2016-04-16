import Entity from '../Entity.js';
import printMessage from '../printMessage.js';
import action from '../action.js';
import state from '../state.js';

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
          state.currentTime += 5;
          printMessage('You sleep for another 5 minutes before the alarm clock rings again.');
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
