import $ from 'jquery';
import _ from 'lodash';

import state, { results } from "state";

let template = _.template(`
  <div class="report-card-screen">
    <h1>Report Card</h1>

    <% if (results.length) { %>
      <section class="results">
        <h3>Results</h3>

        <table class="results-table">
          <% _.each(results, function(result) { %>
            <tr>
            <td><%= result[0] %></td>
            <td><%= result[1] %></td>
            </tr>
          <% }) %>
        </table>
      </section>
    <% } %>
  </div>
`)

export default class {
  start() {
    const frame = $('.main-content');
    frame.html(template({ results: results() }));
  }
};
