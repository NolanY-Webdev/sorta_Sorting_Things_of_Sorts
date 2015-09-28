function mergeSorter(array) {
  var i = 0;
  var n = 0;
  var rayray = [];
  while (i < array.length) {
    if (array[i + 1] === void(0)) {
      rayray[n] = [array[i]];
    } else {
      if (array[i] < array[i + 1]) {
        rayray[n] = [array[i], array[i + 1]];
      } else {
        rayray[n] = [array[i + 1], array[i]];
      }
    }
    i += 2;
    n += 1;
  }

  function mergeIt(array) {
    debugger;
    var i = 0;
    var mRnum = 0;
    var mergedRay = [];
    while (i < array.length) {
      mergedRay[mRnum] = [];
      var n1 = 0;
      var n2 = 0;
      if (array[i + 1] === void(0)) {
        while (n1 < array[i].length) {
          mergedRay[mRnum].push(array[i][n1]);
          n1++;
        }
      } else {
        while (n1 + n2 < array[i].length + array[i + 1].length) {
          if (n1 === array[i].length || n2 === array[i + 1].length) {
            if (n1 === array[i].length) {
              while (n2 < array[i + 1].length) {
                mergedRay[mRnum].push(array[i + 1][n2]);
                n2++;
              }
            } else if (n2 === array[i + 1].length) {
              while (n1 < array[i].length) {
                mergedRay[mRnum].push(array[i][n1]);
                n1++;
              }
            }
          } else if (array[i][n1] > array[i + 1][n2]) {
            mergedRay[mRnum].push(array[i + 1][n2]);
            n2++;
          } else if (array[i][n1] <= array[i + 1][n2]) {
            mergedRay[mRnum].push(array[i][n1]);
            n1++;
          }
        }

        mRnum++;
      }
      i += 2;
    }
    if (mergedRay.length === 1) {
      console.log(mergedRay[0]);
      return mergedRay[0];
    } else {
      return mergeIt(mergedRay);
    }
  }

  var ending = mergeIt(rayray);
  console.log(ending);
  return ending;
}