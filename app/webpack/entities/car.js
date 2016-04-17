import Entity from '../Entity.js';
import printMessage from '../printMessage.js';
import action from '../action.js';
import state from '../state.js';

export class Car extends Entity {
  name() {
    return "car";
  }

  actions() {
    return [
      action(
        "Drive to work.",
        () => {
          state.car.atWork = true;
        },
        () => state.car.running && !state.car.atWork
      ),
      action(
        "Drive to home.",
        () => {
          state.car.atWork = false;
        },
        () => state.car.running && state.car.atWork
      ),
      action(
        "Start the car",
        () => {
          state.car.running = true;
        },
        () => !state.car.running
      ),
      action(
        "Stop the car",
        () => {
          state.car.running = false;
        },
        () => state.car.running
      )
    ];
  }
}

export default new Car();
