import Entity, { printMessage, action, actionWithItem, time, state } from "Entity";
import { addItem, removeItem, isInInventory } from 'inventory.js';
import { capitalize, concat, map, extend } from 'lodash';

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
    extend(this, options);
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

  actions() {
    if (state.wearing == "nothing") {
      return [action("Talk.", () => {
        printMessage(`${capitalize(this.definiteArticle)} seems uncomfirtable with your nudism.`);
        state.currentTime.add(5, 'minutes');
      })];
    }
    return concat([
      action("Talk.", () => {
        printMessage(this.dialog);
        state.currentTime.add(5, 'minutes');
      })],
      map(foodItems, (item) => {
        return actionWithItem(`Give ${item}.`, item, () => {
          printMessage(`You give ${this.definiteArticle} the ${item}`);
          if (item == this.desiredItem) {
            printMessage(this.acceptDialog);
            printMessage(`${capitalize(this.definiteArticle)} pays for the ${item}.`);
            state.amountInTill += 8.50;
            this.state().served = true;
            this.state().fed = true;
            state.currentTime.add(5, 'minutes');
          } else {
            printMessage(`<i>I didn't ask for this, I asked for a ${this.desiredItem}</t>`);
            printMessage(`${capitalize(this.definiteArticle)} storms off`);
            this.state().served = true;
            this.state().angry = true;
            state.currentTime.add(5, 'minutes');
          }
        }, state.prepInventory)
      }));
  }
}

export default Customer;
