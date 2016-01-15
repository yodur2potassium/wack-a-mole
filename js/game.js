function Game() {
  this._score = 0;
  this._highscore = 0;
  this._life = 5;
  this._board = new Board(16);
};

// Add score to current Game
Game.prototype.setScore = function(score){
  this._score += score;
  return this;
};

// Return score of current Game
Game.prototype.getScore = function(){
  return this._score;
};

//Start the main Game loop
Game.prototype.startGame = function(){
  this._board.tick();

};
