import Entity, { printMessage, action, actionWithItem, time, state } from "Entity";
import { addItem, removeItem, isInInventory } from 'inventory.js';

const capitalize = (string) => {
  return string ? string.charAt(0).toUpperCase() + string.slice(1).toLowerCase() : '';
};

let foodItems = [
  'raw patty',
  'grilled patty',
  'burger',
  'bacon burger',
  'cheese burger',
  'bacon cheese burger',
  'fries'
];

export class Customer extends Entity {
  constructor(options) {
    super();
    Object.assign(this, options);
  }

  name() {
    return this.indefiniteArticle;
  }

  state() {
    return state.customers[this.handle]
  }

  hasBeenServed() {
    return this.state().served;
  }

  isInLine() {
    return !this.hasBeenServed() && state.currentTime.isBefore(this.leaveTime);
  }

  actions() {
    if (state.wearing == "nothing") {
      return [action("Talk.", () => {
        printMessage(`${capitalize(this.definiteArticle)} seems uncomfortable with your nudism.`);
        state.currentTime.add(5, 'minutes');
      })];
    }
    return [
      action("Talk.", () => {
        printMessage(this.dialog);
        state.currentTime.add(5, 'minutes');
      })].concat(
      foodItems.map((item) => {
        return actionWithItem(`Give ${item}.`, item, () => {
          printMessage(`You give ${this.definiteArticle} the ${item}.`);
          if (item == this.desiredItem) {
            printMessage(this.acceptDialog);
            printMessage(`${capitalize(this.definiteArticle)} pays for the ${item}.`);
            state.amountInTill += 8.50;
            this.state().served = true;
            this.state().fed = true;
            state.currentTime.add(5, 'minutes');
          } else {
            printMessage(`<em>I didn't ask for this, I asked for a ${this.desiredItem}!</em>`);
            printMessage(`${capitalize(this.definiteArticle)} storms off.`);
            this.state().served = true;
            this.state().angry = true;
            state.currentTime.add(5, 'minutes');
          }
        }, state.prepInventory)
      }));
  }
}

export default Customer;
