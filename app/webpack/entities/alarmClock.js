import Entity from '../Entity.js';

class AlarmClock extends Entity {
  name() {
    return "alarm clock";
  }

  placeholder() {
    return '<span class="alarm-clock"></span>';
  }

  placeholderSelector() {
    return '.alarm-clock';
  }
}

module.exports = new AlarmClock();
