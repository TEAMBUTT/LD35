import $ from 'jquery';
import uuid from 'uuid';

class Entity {
  constructor() {
    this.uuid = uuid.v4();
  }

  html(text) {
    return $(`<div class="entity tooltip">${text}<div class="tooltip-content">This is a really long tooltip that will probably hit the edge.</div></div>`);
  }

  placeholder(text = '') {
    text = text || this.name();
    return `<span data-uuid="${this.uuid}">${text}</span>`;
  }

  placeholderSelector() {
    return `[data-uuid="${this.uuid}"]`;
  }
}

export default Entity;
