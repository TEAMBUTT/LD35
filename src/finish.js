import $ from 'jquery';
import state from 'state';
import ReportCard from 'views/ReportCard';

export default function finish() {
  state.finished = true;
  (new ReportCard()).start();
}
