import Entity, { printMessage, action, time, state } from "../Entity.js";

export class Car extends Entity {
  name() {
    return "car";
  }

  actions() {
    return [
      action(
        "Drive to work.",
        () => {
          if(state.luck < 7) {
            state.currentTime.add(10, 'minutes');
            printMessage("You arrive at work. Red lights all the way there.")
          } else {
            printMessage("You arrive at work.")
          }
          state.currentTime.add(15, 'minutes');
          state.car.atWork = true;
        },
        () => state.car.running && !state.car.atWork
      ),
      action(
        "Drive to home.",
        () => {
          if(state.luck < 7) {
            state.currentTime.add(10, 'minutes');
            printMessage("You arrive back home. Red lights all the way there.")
          } else {
            printMessage("You arrive back home.")
          }
          state.currentTime.add(15, 'minutes');
          state.car.atWork = false;
        },
        () => state.car.running && state.car.atWork
      ),
      action(
        "Start the car.",
        () => {
          printMessage("Rikatikatikatika Rikatikatikatikatika VRRRRROOOM VROOM.")
          printMessage("The engine sputters into life.")
          state.car.running = true;
        },
        () => !state.car.running
      ),
      action(
        "Stop the car.",
        () => {
          printMessage("You stop the car.")
          state.car.running = false;
        },
        () => state.car.running
      )
    ];
  }
}

export default new Car();
