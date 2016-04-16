import $ from 'jquery';
import { each } from 'lodash';

class Scene {
  descriptionMessage() {
    return $('<p>Not implemented.</p>')
  }
  insertEntities(message, entities) {
    each(entities, (entity) => {
      message
        .find(entity.placeholderSelector())
        .each((index, element) => {
          const $element = $(element);
          $element.replaceWith(entity.html($element.text()));
        });
    });
  }
};

export default Scene;
