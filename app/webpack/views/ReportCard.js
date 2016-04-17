import $ from 'jquery';
import _ from 'lodash';

import state, { results } from "state";

let template = _.template(`
  <div class="report-card-screen">
    <h1>Report Card</h1>

    <% if (results.length) { %>
      <section class="results">
        <h3 class="results-total-score">
          Total score:
          <%= _.sumBy(results, 'score') %>
        </h3>

        <table class="results-table">
          <% _.each(results, function(result) { %>
            <tr>
            <td class="results-score"><%= result.score %></td>
            <td class="results-description"><%= result.description %></td>
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
