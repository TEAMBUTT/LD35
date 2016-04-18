import Entity, { printMessage, action, time, state } from "Entity";

export class Floor extends Entity {
  name() {
    if(state.floorClean) {
      return 'clean floor';
    } else {
      return 'dirty floor';
    }
  }

  actions() {
    return [
      action("Mop.", () => {
        printMessage('You clean the floor');
        state.floorClean = true;
        state.currentTime.add(5, 'minutes');
      }),
      action("Pee.", () => {
        printMessage('You... pee on the floor.');
        printMessage('Gross. The floor is covered in pee.');
        state.floorClean = false;
        state.currentTime.add(5, 'minutes');
      })
    ];
  }
}

export default new Floor();
