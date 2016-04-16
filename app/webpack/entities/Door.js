import Entity from '../Entity.js';
import { changeScene } from '../currentScene.js';
import action from '../action.js';

export default class Door extends Entity {
  constructor(destination) {
    super();
    this.destination = destination;
  }

  name() {
    return "door";
  }

  actions() {
    return [
      action("Enter door.", () => changeScene(this.destination))
    ];
  }
}
