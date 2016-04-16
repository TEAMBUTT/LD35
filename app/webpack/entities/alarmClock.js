import Entity from '../Entity.js';

export class AlarmClock extends Entity {
  name() {
    return "alarm clock";
  }

  actions() {
    return [
      {
        label: "Turn it off.",
        action: () => {
        }
      }
    ];
  }
}

export default new AlarmClock();
