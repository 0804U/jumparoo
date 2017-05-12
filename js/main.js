PlayState = {};

// Load Game Assets
PlayState.preload = function() {
  this.game.load.image('background', 'images/background.png');
}

// Create Game Entities
PlayState.create = function() {
  this.game.add.image(0, 0, 'background');
}

// Create Game
window.onload = function() {
  let game = new Phaser.Game(960, 600, Phaser.AUTO, 'game');
  game.state.add('play', PlayState);
  game.state.start('play');
}
