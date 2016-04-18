import Entity, { printMessage, action, time, state } from "Entity";
import { changeScene } from 'currentScene';

export default class Door extends Entity {
  constructor(destination, actionName = "Enter door.") {
    super();
    this.destination = destination;
    this.actionName = actionName;
  }

  name() {
    return "door";
  }

  actions() {
    return [
      action(this.actionName, () => {
        changeScene(this.destination);
        state.currentTime.add(Math.floor(1, 'minutes');
      })
    ];
  }
}
