// Bouncing Balls. By Rob Glazebrook
// The balls are randomized in size, color, opacity, and bounce direction. They'll bounce off the walls of their container and generally make a rather pretty show of things.

var ballCount = null,
    ballMinSize = 40,
    ballMaxSize = 125,
    container = $('.balls');

setBallCount()

function setBallCount() {
  var windowWidth = $(window).width()
  if (windowWidth > 800) {
    ballCount = 25;
  } else {
    ballCount = 15;
  }
  initBalls(ballCount);
}

$(window).resize(function() {
  $('.balls').empty()
  setBallCount();
 });

balls = window.setInterval(moveBalls,40); // 24 FPS

// Random number generator. Takes a minimum, maximum, and a boolean for whether the random number should be an integer.
function rand(min,max,isInt) {
  var min = min || 0,
      max = max || 1,
      isInt = isInt || false,
      num = Math.random()*(max - min) + min;
  return (isInt) ? Math.round(num) : num;
}

// Creates the balls, puts them in the container, and gives them a random size, color, opacity, starting location, and direction/speed of movement.
function initBalls() {
  container.css({'position':'relative'});
  for (i=0;i<ballCount;i++) {
    var newBall = $('<b />').appendTo(container),
        size = rand(ballMinSize,ballMaxSize);
    newBall.css({
      'position':'absolute',
      'width': size+'px',
      'height': size+'px',
      'opacity': rand(.6,.9),
      'border-radius': '50%',
      'background-color': 'rgb('+rand(0,255,true)+','+rand(0,255,true)+','+rand(0,255,true)+')',
      'top': rand(0,container.height()-size),
      'left': rand(0,container.width()-size)
    }).attr({
      'data-dX':rand(-10,10),
      'data-dY':rand(1,10)
    });
  }
}

// Moves the balls based on their direction/speed of movement (saved as a data attribute). If the movement will take them outside of the container, they reverse direction along that axis.
function moveBalls(ballCount) {
  var maxX = container.width(),
      maxY = container.height();
  $('b',container).each(function(i,b) {
    var ball = $(b),
        pos = ball.position()
        x = pos.left,
        y = pos.top,
        dX = parseFloat(ball.attr('data-dX')),
        dY = parseFloat(ball.attr('data-dY')),
        size = ball.height();
    if(x+dX+size > maxX || x+dX < 0) ball.attr('data-dX',(dX=-dX));
    if(y+dY+size > maxY || y+dY < 0) ball.attr('data-dY',(dY=-dY));
    ball.css({'top':y+dY,'left':x+dX});
  });
}
