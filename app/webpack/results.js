import $ from 'jquery';
import state from 'state';
import { extend } from 'lodash';
import ReportCard from 'views/ReportCard';

console.log("asdf");

$(() => {
  // let data = JSON.parse($('.js-result-state').html());
  let data = $('.js-result-state').html();
  data = data.replace("//<![CDATA[", "").replace("//]]>", "");
  data = JSON.parse(data);
  extend(state, data);

  (new ReportCard()).start()
})