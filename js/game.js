function Game() {
  this._score = 0;
  this._highscore = 0;
  this._life = 5;
  this._board = new Board(16);
};

Game.prototype.setScore = function(score){
  this._score += score;
  return this;
};

Game.prototype.getScore = function(){
  return this._score;
};


Game.prototype.startGame = function(){
  this._board.tick();

};
