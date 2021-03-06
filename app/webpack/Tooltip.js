import $ from "jquery";

const gutter = 16;

class Tooltip {
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

    $("body").on("click", (e) => {
      if (!this.contains(e.target)) {
        this.$target.removeClass("open")
      }
    });
  }

  contains(el) {
    return this.isTrigger(el) || this.isTarget(el);
  }

  isTrigger(el) {
    return $(el).closest(this.$el).length !== 0;
  }

  isTarget(el) {
    return $(el).closest(this.$target).length !== 0;
  }

  checkOverflow() {
    this.reset();

    let windowWidth = $(window).width();
    let windowHeight = $(window).height();

    let left = this.$target.offset().left;
    let right = left + this.$target.outerWidth();
    let top = this.$target.offset().top;
    let bottom = top + this.$target.outerHeight();

    if (left < gutter) {
      this.fixOverflow(left - gutter);
    }
    if (right > (windowWidth - gutter)) {
      this.fixOverflow(right - windowWidth + gutter);
    }
    if (bottom > (windowHeight - 50 - gutter)) {
      this.$target.addClass("tooltip-up");
    }
  }

  fixOverflow(offset) {
    this.$target.css("left", `calc(50% - ${offset}px)`);
  }

  reset() {
    this.$target.attr("style", "");
  }
}

export default Tooltip;
