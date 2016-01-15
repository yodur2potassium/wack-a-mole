// Mole Object

function Mole() {
  this.createHtmlElement();
  this._clicked = false;
}

// Create Html and set img
Mole.prototype.createHtmlElement = function() {
 this._htmlElement = $('<img>');
 this._htmlElement.attr('src', 'img/Mole-traps.jpg');
}

Mole.prototype.setClicked = function(){
  this._clicked = true;
}
