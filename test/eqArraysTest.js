const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

//Test Case
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 3, 2]), false);
assertEqual(eqArrays([1, 2, 3], [1]), false);
assertEqual(eqArrays([], []), true);
assertEqual(eqArrays([1,2,3], ['1',2,3]), false);
assertEqual(eqArrays([1,2], "hello"), false);