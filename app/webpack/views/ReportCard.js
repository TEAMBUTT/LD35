import $ from 'jquery';
import _ from 'lodash';

import state, { demerits } from "../state";

let template = _.template(`
  <div class="report-card-screen">
    <h1>Report Card</h1>

    <% if (demerits.length) { %>
      <section class="demerits">
        <h3>Demerits</h3>

        <ul>
          <% _.each(demerits, function(demerit) { %>
            <li><%= demerit %></li>
          <% }) %>
        </ul>
      </section>
    <% } %>
  </div>
`)

export default class {
  start() {
    const frame = $('#game');
    frame.html(template({ demerits: demerits() }));
  }
};
