import $ from 'jquery';

module.exports = class Entity {
  html() {
    return $(`<a href="#">${this.name()}</a>`);
  }

  placeholder() {
    return `<span class="${this.identifierClass()}"></span>`;
  }

  placeholderSelector() {
    return `.${this.identifierClass()}`;
  }
}
