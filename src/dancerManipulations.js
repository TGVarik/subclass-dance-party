/**
 * Created by tom on 9/15/14.
 */
var lineupDancers = function(){
  var padding = 10;
  var top = $('.topbar').height() + padding;
  var left = padding;
  console.log(window.dancers);
  for (var i = 0; i < window.dancers.length; i++){
    var dancer = window.dancers[i];
    var height = dancer.getHeight();
    dancer.move(top, left);
    top = top + height + padding;
  }
};