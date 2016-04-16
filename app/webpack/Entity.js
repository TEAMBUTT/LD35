import $ from 'jquery';
import uuid from 'uuid';
import { each, filter } from 'lodash';
import { renderCurrentScene } from './currentScene.js';
import { addMessage } from './messageQueue.js';

import printMessage from "./printMessage";
import action from "./action";
import time from "./time";
import state from "./state";

export { printMessage, action, time, state }

class Entity {
  constructor() {
    this.uuid = uuid.v4();
  }

  html(text) {
    const actions = this.actions();
    const availableActions = filter(actions, (action) => action.condition());

    if(!availableActions.length) {
      return $(`<span>${text}</span>`);
    }

    const $element = $(`<div class="entity tooltip">${text}</div>`);
    const $tooltipContainer = $('<div class="tooltip-content"></div>');

    $element.append($tooltipContainer);

    each(availableActions, (action) => {
      const $action = $(`<div class="action-label">${action.label}</div>`);

      $action.on('click', () => {
        action.callback();
        renderCurrentScene();
      });

      $tooltipContainer.append($action);
    });

    return $element;
  }

  placeholder(text = '') {
    text = text || this.name();
    return `<span data-uuid="${this.uuid}">${text}</span>`;
  }

  placeholderSelector() {
    return `[data-uuid="${this.uuid}"]`;
  }

  actions() {
    return [];
  }
}

export default Entity;
