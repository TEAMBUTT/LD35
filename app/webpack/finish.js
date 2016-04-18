import $ from 'jquery';
import state from 'state';

function finished() {
  return state.finished;
}

function finish() {
  state.finished = true;

  $.ajax({
    method: "POST",
    url: "/results",
    data: JSON.stringify({ state: state }),
    contentType: "application/json; charset=utf-8",
    dataType: "json"
  }).done(function(data, textStatus, jqXHR) {
    document.location.href = data.location;
  });
}

window.finish = finish;

export default finish;
