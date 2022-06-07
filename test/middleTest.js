const eqArrays= require("../eqArrays");
const middle = require("../middle");
const assertArraysEqual = require("../assertArraysEqual");

// Test Code

assertArraysEqual(middle([]),[]);
//// 1 item
assertArraysEqual(middle([1]),[]);
//// 2 items
assertArraysEqual(middle([1,2]),[]);
//// 3 items
assertArraysEqual(middle([1, 2, 3]),[2]);
//// 4 items
assertArraysEqual(middle([1, 2, 3, 4]),[2, 3]);
//// 5 items
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]);
//// 6 items
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4]);