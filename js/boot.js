var starPower = starPower || {};
starPower.boot = function () {};

starPower.boot.prototype = {
  preload: function () {
    game.load.image('logo', '../assets/logo.png');

  },

  create: function () {
    this.game.stage.backgroundColor = '#212121';

    this.game.physics.startSystem(phaser.Physics.Arcade);

    this.state.start('preloader');
  }
};
