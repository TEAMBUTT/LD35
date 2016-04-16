import Entity from '../Entity.js';

export class AlarmClock extends Entity {
  name() {
    return "alarm clock";
  }
}

export default new AlarmClock();
