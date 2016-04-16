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

  html(text) {
    const $element = super.html(text);
    $element.on('click', () => changeScene(this.destination));
    return $element;
  }
}
