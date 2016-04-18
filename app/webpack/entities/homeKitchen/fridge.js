import Entity, { printMessage, action, time, state } from "Entity";
import { isInInventory } from "inventory"
import beer from "entities/homeKitchen/beer"
import milk from "entities/homeKitchen/milk"

export class Fridge extends Entity {
  name() {
    return 'fridge';
  }

  actions() {
    return [
      action(
        "Open.",
        () => {
          state.currentTime.add(5, 'minutes');
          if (state.fridgeInventory.length === 0) {
            printMessage("Your fridge is empty.");
          } else {
            let message = `
            You see:
            <ul>
            <% if(isInInventory("beer", state.fridgeInventory)) { %>
              <li><%= entity("beer") %></li>
            <% } %>
            <% if(isInInventory("milk", state.fridgeInventory)) { %>
              <li><%= entity("milk") %></li>
            <% } %>
            </ul>
            `;
            printMessage(message, {milk, beer});
          }
        }
      )
    ];
  }
}

export default new Fridge();
