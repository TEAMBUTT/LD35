import $ from 'jquery';
import _ from 'lodash';

let template = _.template(`
  <div class="intro-screen">
    <div class="intro-screen-title"><%= text %></div>
  </div>
`)

module.exports = class {
  start() {
    const frame = $('#game');
    const deferred = $.Deferred();
    frame.html(this.html('The second game by butt.team'));
    setTimeout(() => frame.html(this.html('Work Shift')), 1000);
    setTimeout(() => {
      frame.empty();
      deferred.resolve();
    }, 2000);
    return deferred;
  }
  html(text) {
    return template({ text });
  }
};
