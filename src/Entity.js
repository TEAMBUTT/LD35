import $ from 'jquery';
import { v4 as uuidv4 } from 'uuid';
import { renderCurrentScene } from './currentScene.js';
import { addMessage } from './messageQueue.js';

import printMessage from "./printMessage";
import { action, actionWithItem } from "./action";
import state from "./state";
import ga from "./ga";

export { printMessage, action, actionWithItem, state }

class Entity {
  constructor() {
    this.uuid = uuidv4();
  }

  html(text) {
    const actions = this.actions();
    const availableActions = actions.filter((action) => action.condition());

    if(!availableActions.length) {
      return $(`<span>${text}</span>`);
    }

    const $element = $(`<div class="entity tooltip">${text}</div>`);
    const $tooltipContainer = $('<div class="tooltip-content"></div>');

    $element.append($tooltipContainer);

    availableActions.forEach((action) => {
      const $action = $(`<div class="action-label">${action.label}</div>`);

      $action.on('click', () => {
        ga('send', 'event', 'Action', 'click', `${text} - ${action.label}`);
        action.callback();
        renderCurrentScene();
      });

      $tooltipContainer.append($action);
    });

    return $element;
  }

  placeholder(text = this.name()) {
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
