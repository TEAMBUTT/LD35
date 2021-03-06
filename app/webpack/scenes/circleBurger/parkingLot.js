import Scene from 'Scene';

import entrance from 'scenes/circleBurger/entrance';
import managerLeaving from 'scenes/circleBurger/managerLeaving';
import van from 'scenes/circleBurger/van';
import car from 'scenes/car';
import Door from 'entities/Door';
import state from 'state';

export class ParkingLot extends Scene {
  name(){ return "ParkingLot"; }
  onEnter() {
    super.onEnter();
    if(state.wearing == "nothing") {
      state.publicIndecency = true;
    }
  }

  descriptionMessage() {
    const carDoor = new Door(car, "Get in car.");
    const vanDoor = new Door(van, "Approach the van.");
    const entranceDoor = new Door(
      state.manager.bailed ? entrance : managerLeaving,
      "Walk over."
    );

    let message = `
      You are in the Circle Burger parking lot.
      <br>
    `;

    if (state.doom.started && state.doom.progress === 0) {
      state.doom.progress += 10; // Progress: 10
      message += `
        A man stumbles past you. He's mumbling furiously to himself in a
        language you don't understand. Although you're pretty sure you hear him
        say something about a knife.
        <br>
      `;
    }
    message += `
      The <%= entity("entranceDoor", "entrance to Circle Burger") %> is up ahead.
      <br>
      Your <%= entity("carDoor", state.car.ruined ? "beaten-up car" : "car") %>
      is beside you.
      <% if (state.car.running) { %>
        It is running.
      <% } %>
      <br>
      There is a <%= entity("vanDoor", "black van") %> with tinted windows parked nearby.
    `;

    return this.insertEntities(message, {carDoor, vanDoor, entranceDoor});
  }
}

export default new ParkingLot();
