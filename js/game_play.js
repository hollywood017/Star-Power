var starPower = starPower || {};
starPower.game_play = function () {};
console.log("game play works");
var platforms;
starPower.game_play.prototype = {

  create: function(){
    //adding background
    var sky = this.add.sprite(0,0,'sky');

    platforms = this.game.add.group();

    //enable physics on anything create in the group
    platforms.enableBody = true;

    //creating the ground
    var ground = platforms.create(0, starPower.game.world.height - 64, 'platform');

    //scale to set to the width of the game
    ground.scale.setTo(2, 2);

    //stops the ground from falling away when jumped on
    ground.body.immovable = true;

    //creating the ledges
    var ledge = platforms.create(400, 400, 'platform');
    ledge.body.immovable = true;
    ledge = platforms.create(-150, 250, 'platform');
    ledge.body.immovable = true;
  },
  update: function(){

  }

};
