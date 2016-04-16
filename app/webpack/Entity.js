import $ from 'jquery';

module.exports = class Entity {
  html() {
    return $(`<a href="#">${this.name()}</a>`);
  }
}
