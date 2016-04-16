import $ from 'jquery';
import Entity from '../Entity.js';
import { addMessage } from '../messageQueue.js';

export class AlarmClock extends Entity {
  constructor() {
    super();
    self.ringing = true;
  }

  name() {
    return "alarm clock";
  }

  actions() {
    return [
      {
        label: "Turn it off.",
        callback: () => {
          self.ringing = false;
          addMessage($('<div>You turn the alarm clock off.</div>'));
        }
      }
    ];
  }
}

export default new AlarmClock();
