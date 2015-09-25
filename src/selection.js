function selectionSorter(array) {
  var length = array.length;
  for (var i = 0; i < length; i++) {
    var smallest = array[i];
    for (var j = i; j < length; j++) {
      if (array[j] === smallest) {
        smlIdx = j;
      } else if (array[j] < smallest) {
        smallest = array[j];
      }
    }

    var smlIdx = array.lastIndexOf(smallest);
    var cache = array[i];
    array[i] = smallest;
    array[smlIdx] = cache;
  }
  return array;
}