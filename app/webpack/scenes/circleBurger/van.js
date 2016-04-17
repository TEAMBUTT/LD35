import Scene from 'Scene';

import parkingLot from 'scenes/circleBurger/parkingLot';
import state from 'state';

import Door from 'entities/Door';

export class Van extends Scene {
  descriptionMessage() {
    const parkingLotDoor = new Door(parkingLot, "Walk back to your car.");

    const message = `
      You're standing by the driver side door of a jet black van. The windows
      are tinted but it looks like there's a driver inside.
      <br>
      The <%= entity('parkingLotDoor', 'your car') %> is a ways behind you.
    `;

    return this.insertEntities(message, {parkingLotDoor});
  }
}

export default new Van();
