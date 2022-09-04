import Entity, { printMessage, action, time, state } from "Entity";
import { isInInventory } from "inventory";
import granolaBar from "entities/homeKitchen/granolaBar";

export class Cupboards extends Entity {
  name() {
    return 'cupboards';
  }

  actions() {
    return [
      action(
        "Open.",
        () => {
          state.currentTime.add(1, 'minutes');
          if (state.cupboardsInventory.length === 0) {
            printMessage("The cupboards are empty.");
          } else {
            let message = `
            You see:
            <ul>
            <% if(isInInventory("granolaBar", state.cupboardsInventory)) { %>
              <li><%= entity("granolaBar", "A single granola bar") %></li>
            <% } %>
            </ul>
            `;
            printMessage(message, {granolaBar});
          }
        }
      )
    ];
  }
}

export default new Cupboards();
