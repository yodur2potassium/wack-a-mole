function Board(nb) {
  this._htmlElement = $('#board');
  this._holes = [];
  this.createHoles(nb);
}

// Create empty holes on the board
Board.prototype.createHoles = function(nb){
  for (var i = 0; i < nb; i++) {
    hole = new Hole(this);
    hole.removeMole();
    this._holes.push(hole);
  }
};

// Try to set a new mole every second
Board.prototype.tick = function(){
  setInterval(this.randomizeMoles.bind(this),1000);
};

// Check board and return tab of empty holes
Board.prototype.getEmptyHoles = function(){
  var emptyHoles = [];
  this._holes.forEach(function(hole){
    if(hole.isEmpty()){
      emptyHoles.push(hole);
    }
  });
  console.log(emptyHoles);
  return emptyHoles;
};

// Pick a random Hole and add a Mole
Board.prototype.randomizeMoles = function(){

  var emptyHoles = this.getEmptyHoles();
  if (0 === emptyHoles.length) return;
  var nb = Math.floor(Math.random()*emptyHoles.length);
  emptyHoles[nb].addMole();
};

// Return HtmlElement of instance
Board.prototype.getHtmlElement = function(){
  return this._htmlElement;
};
