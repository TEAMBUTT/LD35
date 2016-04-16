import Entity from '../Entity.js';
import { changeScene } from '../currentScene.js';

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
      {
        label: "Enter door",
        callback: () => changeScene(this.destination)
      }
    ];
  }
}
