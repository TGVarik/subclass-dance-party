/**
 * Created by tom on 9/15/14.
 */
var BouncyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
};

BouncyDancer.prototype = Object.create(Dancer.prototype);
BouncyDancer.prototype.constructor = BouncyDancer;
BouncyDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  var height = this.getHeight();
  this.$node.animate({top: '-=' + height}, );
};