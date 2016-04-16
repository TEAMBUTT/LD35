import Entity from '../Entity.js';
import printMessage from '../printMessage.js';
import action from '../action.js';
import time from '../time.js';
import state from '../state.js';

export class AlarmClock extends Entity {
  constructor() {
    super();
  }

  name() {
    return "alarm clock";
  }

  actions() {
    return [
      action(
        "Snooze",
        () => {
          state.currentTime.add(5, 'minutes');
          printMessage(`You sleep for another 5 minutes before the alarm clock rings again. It's now ${time()}.`);
        },
        () => this.ringing
      ),
      action(
        "Turn if off.",
        () => {
          state.alarmRinging = false;
          printMessage('You turn the alarm clock off.');
        },
        () => state.alarmRinging
      ),
      action(
        "Look at the time.",
        () => { printMessage(`It is now ${time()}.`) }
      )
    ];
  }
}

export default new AlarmClock();
