import $ from 'jquery';
import Handlebars from 'handlebars';

let template = Handlebars.compile(`
  <div class="intro-screen">
    <div class="intro-screen-title">{{text}}</div>
  </div>
`)

module.exports = class {
  start() {
    const frame = $('#game');
    const deferred = $.Deferred();
    frame.html(this.html('A game by butt.team'));
    setTimeout(() => frame.html(this.html('Name of game')), 1000);
    setTimeout(() => deferred.resolve(), 2000);
    return deferred;
  }
  html(text) {
    return template({ text });
  }
};
