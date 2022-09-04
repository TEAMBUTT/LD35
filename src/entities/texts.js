import Entity, { printMessage, action, time, state } from "Entity";

export class Texts extends Entity {
  name() {
    return `${state.unreadTexts} unread texts`;
  }

 texts() {
   return [
     "<tt>Get to work you bum.<br>- Boss<br>(25 minutes ago)</tt>",
     "<tt>Great party!<br>- T<br>(5 hours ago)</tt>",
     "<tt>You work the closing shift tomorrow from 4 to 10pm<br>- Manager<br>(1 days ago)</tt>",
   ]
 }

  actions() {
    return [
      action("Read.", () => {
        state.unreadTexts -= 1;
        printMessage(this.texts()[state.unreadTexts]);
        printMessage('You have <%= entity("texts") %>.', {texts: this});
        state.currentTime.add(1, 'minutes');
      }, () => state.unreadTexts )
    ];
  }
}

export default new Texts();
