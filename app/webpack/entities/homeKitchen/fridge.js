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
            printMessage("Your fridge is empty.");
          } else {
            message = `
            You see:
            <ul>
            <% if(_.includes(state.fridgeInventory, "beer")) { %>
              <li><%= entity("beer") %></li>
            <% } %>
            <% if(_.includes(state.fridgeInventory, "milk")) { %>
              <li><%= entity("milk") %></li>
            <% } %>
            </ul>
            `
            printMessage(message, {milk, beer});
          }
        }
      )
    ];
  }
}

export default new Fridge();
