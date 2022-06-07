const head = require('../head.js');
const assert = require('chai').assert;

describe("head function that returns the first element of given list", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });

  it("returns 5 for [5]", () => {
    assert.strictEqual(head([5]), 5); 
  });

  it("returns 'hello' for ['hello', 'lighthouse', 'good']", () => {
    assert.strictEqual(head(['hello', 'lighthouse', 'good']), 'hello'); 
  });

  it("returns undefined for [] or empty array", () => {
    assert.strictEqual(head([]), undefined); 
  });

});

