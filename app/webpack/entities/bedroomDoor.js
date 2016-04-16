import Entity from '../Entity.js';
import homeHallway from '../scenes/homeHallway.js';
import { changeScene } from '../currentScene.js';

class BedroomDoor extends Entity {
  name() {
    return "bedroom door";
  }

  html(text) {
    const $element = super.html(text);
    $element.on('click', () => changeScene(homeHallway));
    return $element;
  }
}

module.exports = new BedroomDoor();
