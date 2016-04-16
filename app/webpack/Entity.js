import $ from 'jquery';
import uuid from 'uuid';

class Entity {
  constructor() {
    this.uuid = uuid.v4();
  }

  html(text) {
    return $(`<a href="#">${text}</a>`);
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
