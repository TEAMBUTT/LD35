import Entity from '../Entity.js';

class AlarmClock extends Entity {
  identifierClass() {
    return "alarm-clock";
  }
  name() {
    return "alarm clock";
  }
}

module.exports = new AlarmClock();
