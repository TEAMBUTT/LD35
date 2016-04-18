import $ from 'jquery';

import Scene from 'Scene';
import { isInInventory } from "inventory";
import bedroom from 'scenes/bedroom';
import homeHallway from 'scenes/homeHallway';

import Door from 'entities/Door';
import cellPhone from 'entities/cellPhone';
import garbage from 'entities/homeKitchen/garbage';
import fridge from 'entities/homeKitchen/fridge';
import cupboards from 'entities/homeKitchen/cupboards';

export class HomeKitchen extends Scene {
  name(){ return "HomeKitchen"; }
  descriptionMessage() {
    const hallwayDoor = new Door(homeHallway);
    const phoneGlowing = state.mirrorSmashed && state.alarmRinging &&
      isInInventory("granolaBar") && !state.doom.started;

    const message = `
      You are in the kitchen. It smells
      <% if (state.garbageOutside) { %>
        okay.
      <% } else { %>
        awful, because you haven't taken your <%= entity("garbage") %> out
        since before last week's crazy bender.
      <% } %>
      The <%= entity("fridge") %> is to your right, surrounded by some
      <%= entity("cupboards") %>.
      <br>
      The <%= entity("hallwayDoor", "door back to the hallway") %> is behind you.
      <% if (!isInInventory("cellphone")) { %>
        <% if (phoneGlowing) { %>
          <span class="red-glow">
            <%= entity("cellPhone", "Your cellphone") %>
          </span>
          glows an eerie red.
        <% } else { %>
          <%= entity("cellPhone", "Your cellphone") %> is on the counter.
        <% } %>
      <% } %>
    `;

    return this.insertEntities(message, {garbage, fridge, cupboards, hallwayDoor, cellPhone, phoneGlowing});
  }
}

export default new HomeKitchen();
