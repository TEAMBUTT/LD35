import $ from "jquery";

const gutter = 16;

module.exports = class Tooltip {
  constructor(el) {
    this.$el = $(el);
    this.$target = this.$el.find(".tooltip-content");
    this.initBindings();
  }

  initBindings() {
    this.$el.on("click", (e) => {
      e.preventDefault();
      this.$target.toggleClass("open");
      this.checkOverflow();
    });
  }

  checkOverflow() {
    this.reset();

    var windowWidth = $(window).width();

    var left = this.$target.offset().left;
    var right = left + this.$target.outerWidth();
    var top = this.$target.offset().top;

    if (left < gutter) {
      this.fixOverflow(left - gutter);
    }
    if (right > (windowWidth - gutter)) {
      this.fixOverflow(right - windowWidth + gutter);
    }
    if (top < gutter) {
      this.$target.addClass("tooltip-down");
    }
  }

  fixOverflow(offset) {
    console.log(offset);
    this.$target.css("left", `calc(50% - ${offset}px)`);
  }

  reset() {
    this.$target.attr("style", "");
  }
}
