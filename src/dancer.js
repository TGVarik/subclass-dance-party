// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="dancer"></span>');
  this._timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
  window.dancers.push(this);
};

Dancer.prototype.step = function(){
  setTimeout(this.step.bind(this), this._timeBetweenSteps)
};

Dancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.move = function(top, left){
  this.$node.animate({top: top, left: left}, 600, easeQuadInOut);
};

Dancer.prototype.getHeight = function(){
  return this.$node.height() + parseInt(this.$node.css('borderTopWidth'), 10) + parseInt(this.$node.css('borderBottomWidth'), 10);
};