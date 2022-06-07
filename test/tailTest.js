const assert = require('chai').assert;
const tail = require('../tail.js');


//Test Case
describe("tail function returns given array axcept the first item", () => {
  it("returns [] for []", () => {
    assert.deepEqual(tail([]),[]);
  });

  it("returns [] for [1] :one element", () => {
    assert.deepEqual(tail([1]),[]);
  });

  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']),['Lighthouse', 'Labs']);
  });

  it("returns [2, 'hi', 4] for ['1', 2, 'hi', 4]", () => {
    assert.deepEqual(tail(['1',2,'hi',4]),[2,'hi',4]);
  });

  it("it does not change the original array ['1', 2, 'hi', 4]", () => {
    const input = ['1', 2, 'hi', 4];
    tail(['1', 2, 'hi', 4]);
    assert.deepEqual(input,['1', 2, 'hi', 4]);
  });
});

