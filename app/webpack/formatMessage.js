import $ from 'jquery';
import { addMessage } from './messageQueue.js';
import { extend, each } from 'lodash';
import state from './state.js';
import { isInInventory } from './inventory.js';

export default function formatMessage(message, entities) {
  let helpers = {
    entity: (entity, text) => {
      return entities[entity].placeholder(text)
    },
    state: state,
    isInInventory: isInInventory
  };

  extend(helpers, entities);

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
};
