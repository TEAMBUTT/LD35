import Entity, { printMessage, action, time, state } from "../../Entity.js";
import { changeScene } from '../currentScene.js';

export default class Door extends Entity {
  constructor(destination, actionName) {
    super();
    this.destination = destination;
    this.actionName = actionName || "Enter door";
  }

  name() {
    return "door";
  }

  actions() {
    return [
      action(this.actionName, () => {
        changeScene(this.destination);
        state.currentTime.add(1, 'minutes');
      })
    ];
  }
}
