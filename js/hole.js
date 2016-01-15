function Hole(board){
  this.createHtmlElement();
  this.setBoard(board);
  this.addClickListener();
};

Hole.prototype.createHtmlElement = function(){
  this._htmlElement = $('<div>');
  this._htmlElement.addClass('hole');
};

Hole.prototype.setBoard = function(board){
  this._board = board;
  this._board._htmlElement.append(this._htmlElement);
};


Hole.prototype.getMole = function(){
  return this._mole;
};

// Methods :

Hole.prototype.addMole = function(){
    this._mole = new Mole();
    this._htmlElement.append(this._mole._htmlElement);
};

Hole.prototype.removeMole = function(){
  this._mole = null;
  this._htmlElement.empty();
};

Hole.prototype.isEmpty = function(){
  return this._mole === null;
};

Hole.prototype.addClickListener = function(){
  this._htmlElement.on('click', function(e){
    if(!this.isEmpty()){
      
      this.removeMole();
    }

    console.log(this);
  }.bind(this))
};
