import Entity from '../Entity.js';
import printMessage from '../printMessage.js';

export class AlarmClock extends Entity {
  constructor() {
    super();
    this.ringing = true;
  }

  name() {
    return "alarm clock";
  }

  actions() {
    return [
      {
        label: "Turn it off.",
        callback: () => {
          this.ringing = false;
          printMessage('You turn the alarm clock off.');
        }
      }
    ];
  }
}

export default new AlarmClock();
