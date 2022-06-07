
const middle = require("../middle");
const assert = require('chai').assert;



describe("middle function that returns the middle element(s) of given array", () => {
  it("returns [] for []", () => {
    assert.deepEqual(middle([]),[]);
  });

  it("returns [] for [1] : one item", () => {
    assert.deepEqual(middle([1]),[]);
  });

  it("returns [] for [1,2] : two items", () => {
    assert.deepEqual(middle([1, 2]),[]);
  });

  it("returns [2] for [1,2,3] : three items", () => {
    assert.deepEqual(middle([1, 2, 3]),[2]);
  });

  it("returns [2, 3] for [1, 2, 3, 4] : four items", () => {
    assert.deepEqual(middle([1, 2, 3, 4]),[2, 3]);
  });

  it("returns [2, 'SAE'] for ['HI', 2, 'SAE', 4] : four items", () => {
    assert.deepEqual(middle(['HI', 2, 'SAE', 4]),[2, 'SAE']);
  });

});

