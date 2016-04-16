import $ from 'jquery';
import uuid from 'uuid';

module.exports = class Entity {
  constructor() {
    this.uuid = uuid.v4();
  }

  html() {
    return $(`<a href="#">${this.name()}</a>`);
  }

  placeholder() {
    return `<span data-uuid="${this.uuid}"></span>`;
  }

  placeholderSelector() {
    return `[data-uuid="${this.uuid}"]`;
  }
}
