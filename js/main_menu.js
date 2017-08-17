var starPower = starPower || {};
starPower.main_menu = function () {};

starPower.main_menu.prototype = {
  init: function(score) {
    this.highestScore = this.highestScore || 0;
    this.highestScore = Math.max(score, this.highestScore);
  },
  create: function() {

  },
  update: function() {

  }
};
