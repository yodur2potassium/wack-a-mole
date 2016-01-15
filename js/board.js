function Board(nb) {
  this._htmlElement = $('#board');
  this._holes = [];
  this.createHoles(nb);
}

Board.prototype.createHoles = function(nb){
  for (var i = 0; i < nb; i++) {
    hole = new Hole(this);
    hole.removeMole();
    this._holes.push(hole);
  }
  console.log(this._holes);
};

Board.prototype.tick = function(){
  setInterval(this.randomizeMoles.bind(this),1000);
};

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

Board.prototype.randomizeMoles = function(){

  var emptyHoles = this.getEmptyHoles();
  if (0 === emptyHoles.length) return;
  var nb = Math.floor(Math.random()*emptyHoles.length);
  emptyHoles[nb].addMole();
};


Board.prototype.getHole = function(nb){
  return this._holes[nb];
};

Board.prototype.getHtmlElement = function(){
  return this._htmlElement;
};
