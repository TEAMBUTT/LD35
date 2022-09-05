import $ from 'jquery';
import { renderCurrentScene } from './currentScene.js';
import { addMessage } from './messageQueue.js';

import printMessage from "./printMessage";
import { action, actionWithItem } from "./action";
import state from "./state";
import ga from "./ga";

export { printMessage, action, actionWithItem, state }

function uuidv4() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}

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
