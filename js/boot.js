var starPower = starPower || {};
starPower.boot = function () {};

starPower.boot.prototype = {
  preload: function () {

  },

  create: function () {

    
    this.state.start('preloader');
  }
};
