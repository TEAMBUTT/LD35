import $ from 'jquery';
import _ from 'lodash';
import Promise from "bluebird";

let template = _.template(`
  <div class="intro-screen">
    <div class="intro-screen-title"><%= text %></div>
  </div>
`)

module.exports = class {
  start() {
    const frame = $('#game');

    return new Promise((resolve, reject) => {
      frame.html(this.html('The second game by butt.team'));
      setTimeout(() => frame.html(this.html('Work Shift')), 1000);
      setTimeout(() => frame.html(this.html("You are a people shaped person.<br/>Are you a bad enough dude to rescue the president?")), 2000);
      setTimeout(() => {
        frame.empty();
        resolve();
      }, 2000);
    });
  }
  html(text) {
    return template({ text });
  }
};
