import Entity, { printMessage, action, time, state } from "Entity";
import { currentTime } from "time";

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
          printMessage(`You sleep for another 10 minutes before the alarm clock rings again. It's now ${currentTime()}.`);
        },
        () => state.alarmRinging
      ),
      action(
        "Turn it off.",
        () => {
          state.alarmRinging = false;
          printMessage('You turn the alarm clock off.');
          state.currentTime.add(1, 'minutes');
        },
        () => state.alarmRinging
      ),
      action(
        "Look at the time.",
        () => {
          printMessage(`It is now ${currentTime()}. Your shift started at 4pm`)
          state.currentTime.add(1, 'minutes');
        }
      )
    ];
  }
}

export default new AlarmClock();
