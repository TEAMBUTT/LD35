import $ from 'jquery';

module.exports = class {
  constructor() {
    console.log('okay');
  }
  start() {
    const frame = $('#game');
    this.deferred = $.Deferred();

    return this.deferred;
  }
};
