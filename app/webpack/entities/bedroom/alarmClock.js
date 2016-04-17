import Entity, { printMessage, action, time, state } from "Entity";

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
          state.currentTime.add(10, 'minutes');
          printMessage(`You sleep for another 10 minutes before the alarm clock rings again. It's now ${time()}.`);
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
        () => { printMessage(`It is now ${time()}. Your shift started at 4pm`) }
      )
    ];
  }
}

export default new AlarmClock();
