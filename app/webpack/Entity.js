import $ from 'jquery';
import uuid from 'uuid';
import { each } from 'lodash';

class Entity {
  constructor() {
    this.uuid = uuid.v4();
  }

  html(text) {
    const $element = $(`<div class="entity tooltip">${text}</div>`);
    const $tooltipContainer = $('<div class="tooltip-content"></div>');

    $element.append($tooltipContainer);

    each(this.actions(), (action) => {
      const $action = $(`<div class="action-label">${action.label}</div>`);
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
