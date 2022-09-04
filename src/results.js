import $ from 'jquery';
import state, {updateState} from 'state';
import { extend } from 'lodash';
import ReportCard from 'views/ReportCard';

$(() => {
  // let data = JSON.parse($('.js-result-state').html());
  let data = $('.js-result-state').html();
  data = data.replace("//<![CDATA[", "").replace("//]]>", "");
  data = JSON.parse(data);
  updateState(data);

  (new ReportCard()).start()
})
