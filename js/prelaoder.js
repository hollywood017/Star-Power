var starPower = starPower || {};
starPower.preloader = function () {};

starPower.preloader.prototype = {
  preload: function() {
//show loading screen
this.splash = this.add.sprite(this.game.world.centerx, this.game.world.centery, 'logo');
this.splash.anchor.setTo(0.5);

//loading game assets
    game.load.image('sky', '../assets/sky.png');
    game.load.image('platform', '../assets/platform.png');
    game.load.image('player', '../assets/dude.png');
    game.load.image('star', '../assets/star.png');
    game.load.image('diamond', '../assets/diamond.png');
  },

  create: function() {
    this.state.start('main_menu');
  }
};
