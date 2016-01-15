// Hole Object

function Hole(board){
  this.createHtmlElement();
  this.setBoard(board);
  this.addClickListener();
};

// Create Html and add class
Hole.prototype.createHtmlElement = function(){
  this._htmlElement = $('<div>');
  this._htmlElement.addClass('hole');
};

// Set parent board and append
Hole.prototype.setBoard = function(board){
  this._board = board;
  this._board.getHtmlElement().append(this._htmlElement);
};

// Return child mole
Hole.prototype.getMole = function(){
  return this._mole;
};

// Methods :

// Instance Mole object and append
Hole.prototype.addMole = function(){
    this._mole = new Mole();
    this._htmlElement.append(this._mole._htmlElement);
};

// Clear object from Mem and remove Html
Hole.prototype.removeMole = function(){
  this._mole = null;
  this._htmlElement.empty();
};

// Check if there is an instance of Mole
Hole.prototype.isEmpty = function(){
  return this._mole === null;
};

// Bind click to remove
Hole.prototype.addClickListener = function(){
  this._htmlElement.on('click', function(e){
    if(!this.isEmpty()){

      this.removeMole();
    }

  }.bind(this))
};
