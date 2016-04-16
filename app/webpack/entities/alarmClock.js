import Entity from '../Entity.js';
import printMessage from '../printMessage.js';
import action from '../action.js';

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
