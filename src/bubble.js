function bubbleSorter(array) {
  var stillSorting = true;
  var i = 0;
  while (stillSorting) {
    stillSorting = false;
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
        stillSorting = true;
      } else if (curr < array[i + 1]) {
        curr = array[i + 1];
      }
      i++;
    }
  }
  return array;
}
