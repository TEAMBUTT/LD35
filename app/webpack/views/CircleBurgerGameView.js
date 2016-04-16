import $ from 'jquery';
import { onMessage, addMessage } from '../messageQueue.js';
import { getCurrentScene } from '../currentScene.js';

module.exports = class {
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
    this.messageBox.append(message);
    this.$frame.scrollTop(this.$frame[0].scrollHeight);
  }
}
