import $ from 'jquery';
import { each, map, mapValues, assign } from 'lodash';
import state from 'state';
import formatMessage from 'formatMessage';
import printMessage from 'printMessage';

class Scene {
  descriptionMessage() {
    return $('<p>Not implemented.</p>')
  }
  insertEntities(message, entities) {
    return formatMessage(message, entities);
  }
  onEnter() {
    if (!state.afterClosingTime && state.currentTime.isAfter(state.closingTime)) {
      printMessage("You realize that it must be time to close up shop by now.");
      state.afterClosingTime = true;
    }
  }
};

export default Scene;
