import $ from 'jquery';
import { addMessage } from './messageQueue.js';

import template from 'lodash/template';

import state from './state.js';
import { isInInventory } from './inventory.js';

export default function formatMessage(message, data) {
  let entities = [];
  let helpers = {
    entity: (entity, text) => {
      entities.push(entity);
      return data[entity].placeholder(text);
    },
    state: state,
    isInInventory: isInInventory
  };

  Object.assign(helpers, data);

  message = template(message)(helpers);
  message = $('<div class="message scene-description">').append(message);

  entities.forEach((entity) => {
    message
      .find(data[entity].placeholderSelector())
      .each((index, element) => {
        const $element = $(element);
        $element.replaceWith(data[entity].html($element.text()));
      });
  });
  return message;
};
