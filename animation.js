(function(){

  // Using setInterval to simulate animation
  var ANIMATION_SPEED = 5; // in ms
  var container = document.getElementById('container');
  document.body.style.background = '#000000';
  var array = [];
  var numOfNums = 800;
  for (var n = 0; n < numOfNums; n++) {
    array.push(Math.random() * 100);
  }

  var animateUntil = true;
  var frame = 0;
  var animationInterval = null;

  // occurs every ANIMATION_SPEED step
  function loop() {

    // update data
    _updateData();

    // clear container contents
    _clearContainer();

    // render to container
    _render();

    // increment frame
    frame++;

    // stop loop
    if ( animateUntil ) {
      clearInterval( animationInterval );
      // var block = document.createElement('div');
      // block.innerHTML = array;
      // container.appendChild(block);
    }
  }

  function _updateData() {
    var i = 0;
    animateUntil = true;
    var curr = array[i];
    var loopOnce = true;
    while (loopOnce) {
      if (array[i + 1] == undefined) {
        i = 0;
        loopOnce = false;
      } else if (curr == array[i + 1]) {
      } else if (curr > array[i + 1]) {
        array[i] = array[i + 1];
        array[i + 1] = curr;
        animateUntil = false;
      } else if (curr < array[i + 1]) {
        curr = array[i + 1];
      }
      i++;
    }
  }

  function _clearContainer() {
    container.innerHTML = '';
  }

  function _render() {
    array.forEach(function(d) {
      var block = document.createElement('div');
      block.style.height = '1px';
      block.style.width = d + '%';
      block.style.background = '#0F5F' + ((d >= 10) ? Math.floor(d) : '0' + Math.floor(d));
      container.appendChild( block );
    });
  }

  animationInterval = setInterval(loop, ANIMATION_SPEED);

})();