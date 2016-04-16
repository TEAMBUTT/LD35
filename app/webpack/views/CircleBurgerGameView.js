import $ from 'jquery';
import Tooltip from '../Tooltip.js';
import { onMessage, addMessage } from '../messageQueue.js';
import { getCurrentScene } from '../currentScene.js';

export default class {
  constructor() {
    this.$frame = $('#game');
  }
  start() {
    this.messageBox = $('<div class="message-box">');
    this.$frame.append(this.messageBox);
    onMessage((message) => this.displayMessage(message));
    addMessage(getCurrentScene().descriptionMessage());
  }
  displayMessage(message) {
    this.messageBox.children().addClass('disabled');
    this.messageBox.append(message);
    for (var el of this.messageBox.find(".tooltip")) {
      new Tooltip(el);
    }
    this.$frame.scrollTop(this.$frame[0].scrollHeight);
  }
}
