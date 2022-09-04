import $ from 'jquery';
import _ from 'lodash';

import state from "state";
import calculateResults from "calculateResults";

let template = _.template(`
  <div class="report-card-screen">
    <section class="results">
      <h1>Employee Performance Review</h1>
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

      <a class="play-again" href="/">Play again</a>
    </section>
  </div>
`)

export default class {
  start() {
    const frame = $('#report');
    if (state.doom.progress === 100) {
      $(".main-content").addClass("doom");
      let doomResults = [
        { score: 43, description: "Left your alarm ringing. Fight the power!" },
        { score: 50, description: "Remembered to dress for the occaision." },
        { score: 79, description: "Didn't eat the granola bar." },
        { score: 128, description: "Investigated the strange noises. Brave!" },
        { score: 167, description: "Carved a pentagram in your arm." },
        { score: 250, description: "Met the mysterious stranger." },
        { score: -1383, description: "Might have inadvertently started the apocalypse." },
      ];
      frame.html(template({ results: doomResults }));
    } else {
      frame.html(template({ results: calculateResults() }));
    }
  }
};
