var starPower = starPower || {};
// this is the name of where you want to insert the cavas in the dom
                                              //         |
                                              //         |
starPower.game = new Phaser.Game(800,600, Phaser.CANVAS, '');

  starPower.game.state.add('boot', starPower.boot);
  starPower.game.state.add('preloader', starPower.preloader);
  starPower.game.state.add('main_menu', starPower.main_menu);
  starPower.game.state.add('game_play', starPower.game_play);
  starPower.game.state.add('game_over', starPower.game_over);

starPower.game.state.start('boot');
