import NormalDoor from 'entities/Door';
import state from 'state';
import finish from 'finish';
import action from 'action';
import { changeScene } from 'currentScene';
import entrance from 'scenes/circleBurger/entrance';

export default class Door extends NormalDoor {
  actions() {
    return [
      action(this.actionName, () => {
        changeScene(this.destination);
        state.currentTime.add(Math.floor((Math.random() * 5) + 1), 'minutes');
      }),

      action("Lock the door. (This ends the game. You can't go back.)", () => {
        state.doorLocked = true;

        if (this.destination === entrance) {
          state.lockedIn = true;
        }

        if (state.currentTime.isBefore(state.closingTime.clone().subtract(5, 'minutes'))) {
          state.closedEarly = true;
        }

        if (state.currentTime.isAfter(
              state.closingTime.clone().add(1, 'hour')
            )) {
          state.closedLate = true;
        }

        finish();
      })
    ];
  }
};
