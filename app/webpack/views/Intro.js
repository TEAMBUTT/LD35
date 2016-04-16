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
    const frame = $('#game');

    return new Promise((resolve, reject) => {
      frame.html(this.html('The second game by butt.team'));
      setTimeout(() => frame.html(this.html('Work Shift')), 250);
      setTimeout(() => {
        frame.empty();
        resolve();
      }, 500);
    });
  }
  html(text) {
    return template({ text });
  }
};
