import $ from 'jquery';
import state from 'state';
import formatMessage from 'formatMessage';
import printMessage from 'printMessage';
import ga from "./ga";

class Scene {
  descriptionMessage() {
    return $('<p>Not implemented.</p>');
  }
  name() {
    return "scene";
  }
  insertEntities(message, entities) {
    return formatMessage(message, entities);
  }
  onEnter() {
    ga('send', 'event', 'Scene', 'enter', this.name());
  }
};

export default Scene;
