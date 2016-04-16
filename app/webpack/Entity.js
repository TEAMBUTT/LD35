import $ from 'jquery';
import uuid from 'uuid';

class Entity {
  constructor() {
    this.uuid = uuid.v4();
  }

  html(text) {
    const $element = $(`<div class="entity tooltip">${text}</div>`);
    const $tooltipContainer = $('<div class="tooltip-content"></div>');

    $element.append($tooltipContainer);

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
    return [
      {
        label: "Turn it off.",
        action: () => {
        }
      }
    ]
  }
}

export default Entity;
