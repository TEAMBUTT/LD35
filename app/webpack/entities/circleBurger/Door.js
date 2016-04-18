import NormalDoor from 'entities/Door';
import state from 'state';
import finish from 'finish';
import action from 'action';

export default class Door extends NormalDoor {
  actions() {
    return [
      action(this.actionName, () => {
        changeScene(this.destination);
        state.currentTime.add(Math.floor((Math.random() * 5) + 1), 'minutes');
      }),

      action("Lock the door. (This ends the game. You can't go back.)", () => {
        state.doorLocked = true;
        finish();
      })
    ];
  }
};
