import $ from 'jquery';
import Tooltip from 'Tooltip';
import { onMessage, addMessage } from 'messageQueue';
import { renderCurrentScene } from 'currentScene';
import printMessage from 'printMessage';

export default class {
  constructor() {
    this.$frame = $('#game');
  }
  start() {
    this.messageBox = $('<div class="message-box">');
    this.$frame.append(this.messageBox);
    onMessage((message) => this.displayMessage(message));
    printMessage("You are late for work!");
    renderCurrentScene();
  }
  displayMessage(message) {
    this.messageBox.children('.to-hide').removeClass('to-hide').addClass('disabled');

    this.messageBox.append(message);

    message.find(".tooltip").each((index, el) => {
      new Tooltip(el);
    });

    this.$frame.animate({ scrollTop: this.$frame[0].scrollHeight}, 200, () => {
      message.addClass("visible");
    });
  }
}
