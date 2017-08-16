var starPower = starPower || {};
starPower.preloader = function () {};

starPower.preloader.prototype = {
  preload: function() {
    game.load.image('sky', '../assets/sky.png');
    game.load.image('platform', '../assets/platform.png');
    game.load.image('player', '../assets/dude.png');
    game.load.image('star', '../assets/star.png');
    game.load.image('diamond', '../assets/diamond.png');
  },

  create: function() {

  }
};
