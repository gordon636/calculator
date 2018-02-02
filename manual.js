const Manual = function() {
  this.stats = ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma'];
  this.points = 27;
  this.base = 8;
};

// Try to increment request.stat and charge request.points
Manual.prototype.increment = function(request){
  request.stat++;
  request.points--;
};

Manual.prototype.decrement = function(request){
  request.stat--;
  request.points++;
};
