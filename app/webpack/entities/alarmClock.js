import Entity from '../Entity.js';

class AlarmClock extends Entity {
  name() {
    return "alarm clock";
  }
}

module.exports = new AlarmClock();
