import $ from 'jquery';
import { each } from 'lodash';

module.exports = class Scene {
  descriptionMessage() {
    return $('<p>Not implemented.</p>')
  }
  insertEntities(message, entities) {
    each(entities, (entity) => {
      message
        .find(entity.placeholderSelector())
        .replaceWith(entity.html());
    });
  }
};
