import $ from 'jquery';
import _ from 'lodash';
import Promise from "bluebird";

let template = _.template(`
  <div class="intro-screen">
    <div class="intro-screen-title"><%= text %></div>
  </div>
`)

export default class {
  start() {
    const frame = $('.main-content');

    if($('html').data('environment') == 'development') {
      return Promise.resolve();
    }

    return new Promise((resolve, reject) => {
      frame.html(this.html('The second game by butt.team'));
      setTimeout(() => frame.html(this.html('Shift at the Circle Burger')), 2000);
      setTimeout(() => {
        frame.empty();
        resolve();
      }, 5000);
    });
  }
  html(text) {
    return template({ text });
  }
};
