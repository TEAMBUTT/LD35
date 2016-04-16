import $ from 'jquery';
import { each, map, mapValues } from 'lodash';

class Scene {
  descriptionMessage() {
    return $('<p>Not implemented.</p>')
  }
  insertEntities(message, entities) {
    let helpers = {};
    helpers.entity = (entity, text) => {
      return entities[entity].placeholder(text)
    };

    message = _.template(message)(helpers);
    message = $('<div class="message scene-description">').append(message);

    each(entities, (entity) => {
      message
        .find(entity.placeholderSelector())
        .each((index, element) => {
          const $element = $(element);
          $element.replaceWith(entity.html($element.text()));
        });
    });
    return message;
  }
};

export default Scene;
