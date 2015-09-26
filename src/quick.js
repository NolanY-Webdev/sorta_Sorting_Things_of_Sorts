function quickSorter(array) {
  if (array.length === 0) {
    return [];
  }

  var pivot = [array.pop()];
  var l = [];
  var m = [];

  for (var i = 0; i < array.length; i++) {
    if (array[i] < pivot) {
      l.push(array[i]);
    } else if (array[i] >= pivot) {
      m.push(array[i]);
    }
  }

  var returned = quickSorter(l).concat(pivot.concat(quickSorter(m)));
  return returned;
}