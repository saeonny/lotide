const head = require('../head.js');
const assertEqual = require('../assertEqual.js');

console.log("Test : head(list) function");
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([1]),1);
assertEqual(head([]), undefined);