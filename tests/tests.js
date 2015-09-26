var expect = chai.expect;

describe('bubbleSorter', function() {
  it('should be a function', function() {
    expect(bubbleSorter).to.be.a('function');
  });
  it('should return arrays', function() {
    var newRay = [0, 1, 2, 3, 8, 4, 5];
    var sortedNewRay = bubbleSorter(newRay);
    expect(newRay.length).to.equal(sortedNewRay.length);
  });
  it('should properly sort arrays', function () {
    var newRay = [0, 1, 2, 3, 8, 4, 5];
    var sortedNewRay = bubbleSorter(newRay);
    expect(sortedNewRay).to.deep.equal([0, 1, 2, 3, 4, 5, 8]);
    var dumbArray = bubbleSorter([0, 0, 1, 0, 1, 0, 0, 10, 1]);
    expect(dumbArray).to.deep.equal([0, 0, 0, 0, 0, 1, 1, 1, 10]);
    var annasArray = bubbleSorter([3.14159, 26, 64, 7]);
    expect(annasArray).to.deep.equal([3.14159, 7, 26, 64]);
  });
});

describe('selectionSorter', function() {
  it('should be a function', function() {
    expect(selectionSorter).to.be.a('function');
  });
  it('should return arrays', function() {
    var newRay = [0, 1, 2, 3, 8, 4, 5];
    var sortedNewRay = selectionSorter(newRay);
    expect(newRay.length).to.equal(sortedNewRay.length);
  });
  it('should properly sort arrays', function () {
    var newRay = [0, 1, 2, 3, 8, 4, 5];
    var sortedNewRay = selectionSorter(newRay);
    expect(sortedNewRay).to.deep.equal([0, 1, 2, 3, 4, 5, 8]);
    var dumbArray = selectionSorter([0, 0, 1, 0, 1, 0, 0, 10, 1]);
    expect(dumbArray).to.deep.equal([0, 0, 0, 0, 0, 1, 1, 1, 10]);
    var annasArray = selectionSorter([3.14159, 26, 64, 7]);
    expect(annasArray).to.deep.equal([3.14159, 7, 26, 64]);
  });
});

describe('insertionSorter', function() {
  it('should be a function', function() {
    expect(insertionSorter).to.be.a('function');
  });
  it('should return arrays', function() {
    var newRay = [0, 1, 2, 3, 8, 4, 5];
    var sortedNewRay = insertionSorter(newRay);
    expect(sortedNewRay).to.be.a('array');
  });
  it('should properly sort arrays', function () {
    var newRay = [0, 1, 2, 3, 8, 4, 5];
    var sortedNewRay = insertionSorter(newRay);
    expect(sortedNewRay).to.deep.equal([0, 1, 2, 3, 4, 5, 8]);
    var dumbArray = insertionSorter([0, 0, 1, 0, 1, 0, 0, 10, 1]);
    expect(dumbArray).to.deep.equal([0, 0, 0, 0, 0, 1, 1, 1, 10]);
    var annasArray = insertionSorter([3.14159, 26, 64, 7]);
    expect(annasArray).to.deep.equal([3.14159, 7, 26, 64]);
  });
});

describe('quickSorter', function() {
  it('should be a function', function() {
    expect(quickSorter).to.be.a('function');
  });
  it('should return arrays', function() {
    var newRay = [0, 1, 2, 3, 8, 4, 5];
    var sortedNewRay = quickSorter(newRay);
    expect(sortedNewRay).to.be.a('array');
  });
  it('should properly sort arrays', function () {
    var newRay = [0, 1, 2, 3, 8, 4, 5];
    var sortedNewRay = quickSorter(newRay);
    expect(sortedNewRay).to.deep.equal([0, 1, 2, 3, 4, 5, 8]);
    var dumbArray = quickSorter([0, 0, 1, 0, 1, 0, 0, 10, 1]);
    expect(dumbArray).to.deep.equal([0, 0, 0, 0, 0, 1, 1, 1, 10]);
    var annasArray = quickSorter([3.14159, 26, 64, 7]);
    expect(annasArray).to.deep.equal([3.14159, 7, 26, 64]);
  });
});

describe('mergeSorter', function() {
  it('should be a function', function() {
    expect(mergeSorter).to.be.a('function');
  });
  it('should return arrays', function() {
    var newRay = [0, 1, 2, 3, 8, 4, 5];
    var sortedNewRay = mergeSorter(newRay);
    expect(newRay.length).to.equal(sortedNewRay.length);
  });
  it('should properly sort arrays', function () {
    var newRay = [0, 1, 2, 3, 8, 4, 5];
    var sortedNewRay = mergeSorter(newRay);
    expect(sortedNewRay).to.deep.equal([0, 1, 2, 3, 4, 5, 8]);
    var dumbArray = mergeSorter([0, 0, 1, 0, 1, 0, 0, 10, 1]);
    expect(dumbArray).to.deep.equal([0, 0, 0, 0, 0, 1, 1, 1, 10]);
    var annasArray = mergeSorter([3.14159, 26, 64, 7]);
    expect(annasArray).to.deep.equal([3.14159, 7, 26, 64]);
  });
});
