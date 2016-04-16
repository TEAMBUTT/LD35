import Entity, { printMessage, action, time, state } from "../../Entity.js";

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
        "Snooze.",
        () => {
          state.currentTime.add(5, 'minutes');
          printMessage(`You sleep for another 5 minutes before the alarm clock rings again. It's now ${time()}.`);
        },
        () => state.alarmRinging
      ),
      action(
        "Turn it off.",
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
