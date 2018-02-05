const Manual = function() {
  this.stats = ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma'];
  this.points = 27;
  this.base = 8;
};

// Try to increment request.stat and charge request.points
Manual.prototype.increment = function(request){
  const cost = request.stat < 13 ? 1 : 2;
  if (request.stat < 15 && request.points >= cost){
    request.stat++;
    request.points -= cost;
  }

};

Manual.prototype.decrement = function(request){
  const cost = request.stat > 13 ? 2 : 1;
  if (request.stat > 8){
    request.stat--;
    request.points += cost;
  }
};
