function insertionSorter(array) {
  var arrCopy = array;
  var sorted = [];
  sorted.push(arrCopy.pop());
  var length = arrCopy.length;
  for (var i = 0; i < length; i++) {
    var storage = arrCopy.pop();
    var sortedIdx = 0;
    for (var j = 0; j < sorted.length; j++) {
      if (storage > sorted[j]) {
        sortedIdx = j + 1;
      }
    }
    sorted.splice(sortedIdx, 0, storage);
  }
  return sorted;
}