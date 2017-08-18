var starPower = starPower || {};
starPower.preloader = function () {};
console.log("preloader works");
starPower.preloader.prototype = {
  preload: function() {
//show loading screen
this.splash = this.add.sprite(this.game.world.centerx, this.game.world.centery, 'logo');
this.splash.anchor.setTo(0.5);

//loading game assets
    starPower.game.load.image('sky', './assets/sky.png');
    starPower.game.load.image('platform', './assets/platform.png');
    starPower.game.load.image('player', './assets/dude.png');
    starPower.game.load.image('star', './assets/star.png');
    starPower.game.load.image('diamond', './assets/diamond.png');
  },

  create: function() {
    this.state.start('game_play');
  }
};
