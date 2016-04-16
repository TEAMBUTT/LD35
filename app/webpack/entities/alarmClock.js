import $ from 'jquery';
import Entity from '../Entity.js';
import { addMessage } from '../messageQueue.js';

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
          addMessage($('<div class="message">You turn the alarm clock off.</div>'));
        }
      }
    ];
  }
}

export default new AlarmClock();
