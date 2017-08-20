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

    //the player and its settings
    player = this.game.add.sprite(32, starPower.game.world.height - 150, 'player');

    //enabling physics on the player
    starPower.game.physics.arcade.enable(player);

    //player physics properties
    player.body.bounce.y = 0.2;
    player.body.gravity.y = 300;
    player.body.collideWorldBounds = true;

    //walking left and right
    player.animations.add('left', [0, 1, 2, 3], 10, true);
    player.animations.add('right', [5, 6, 7, 8], 10, true);
  },
  update: function(){
    var hitPlatform = this.game.physics.arcade.collide(player, platforms);

    cursors = this.game.input.keyboard.createCursorKeys();

    //reseting the players velocity
    player.body.velocity.x = 0;
    if(cursors.left.isDown){
      //Move to the left
      player.body.velocity.x = -150;
      player.animations.play('left');
    }
    else if (cursors.right.isDown) {
      //Move to the right
      player.body.velocity.x = 150;
      player.animations.play('right');
    }
    else{
      player.animations.stop();
      player.frame = 4;
    }
    //Allow player to jump if they are touching the floor
    if (cursors.up.isDown && player.body.touching.down && hitPlatform) {
      player.body.velocity.y = -350;
    }
  }

};
