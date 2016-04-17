import Entity, { printMessage, action, time, state } from "../../Entity.js";
import beer from "./beer.js"
import milk from "./milk.js"

export class Fridge extends Entity {
  name() {
    return 'fridge';
  }

  actions() {
    return [
      action(
        "Open.",
        () => {
          let message = "";

          if (state.fridgeInventory.length === 0) {
            message += "Your fridge is empty."
            printMessage(message);
          } else {
            message += "You see:"
            message += "<ul>"
            let entities = {};
            if (_.includes(state.fridgeInventory, "beer")) {
              message += `<li><%= entity("beer", "Generic beer") %></li>`;
              entities.beer = beer;
            }
            if (_.includes(state.fridgeInventory, "milk")) {
              message += `<li><%= entity("milk", "Expired milk") %></li>`
              entities.milk = milk;
            }
            message += "</ul>"
            printMessage(message, entities);
          }
        }
      )
    ];
  }
}

export default new Fridge();
