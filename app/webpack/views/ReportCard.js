import $ from 'jquery';
import _ from 'lodash';

import state from "state";
import calculateResults from "calculateResults";

let template = _.template(`
  <div class="report-card-screen">
    <section class="results">
      <h1>Employee performance review</h1>
      <% if (state.doom.progress === 100) { %>
        <h3 class="results-total-score doom">
          Total score: 666
        </h3>
      <% } else { %>
        <table class="results-table">
          <% _.each(results, function(result) { %>
            <tr>
            <td class="results-score"><%= result.score %></td>
            <td class="results-description"><%= result.description %></td>
            </tr>
          <% }) %>
        </table>

        <h3 class="results-total-score">
          Total score:
          <%= _.sumBy(results, 'score') %>
        </h3>
      <% } %>

      <a class="play-again" href="/">Play again</a>
    </section>
  </div>
`)

export default class {
  start() {
    const frame = $('#report');
    frame.html(template({ results: calculateResults() }));
  }
};
