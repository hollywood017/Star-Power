var starPower = starPower || {};
starPower.boot = function () {};

console.log("boot works");

starPower.boot.prototype = {
  preload: function () {
    this.load.image('logo', './assets/logo.png');

  },

  create: function () {
    this.game.stage.backgroundColor = '#212121';

    this.game.physics.startSystem(Phaser.Physics.Arcade);

    this.state.start('preloader');
  }
};
