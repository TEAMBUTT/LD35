import $ from 'jquery';
import { each, map, mapValues, assign } from 'lodash';
import state from './state.js';
import formatMessage from './formatMessage.js';

class Scene {
  descriptionMessage() {
    return $('<p>Not implemented.</p>')
  }
  insertEntities(message, entities) {
    return formatMessage(message, entities);
  }
};

export default Scene;
