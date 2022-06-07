const assertEqual = require('../assertEqual.js');
const tail = require('../tail.js');


//Test Case
let list = ["Hello", "Lighthouse", "Labs"];
console.log("BEFORE: "+ list);
const result = tail(list);
console.log("AFTER: " +result);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log("BEFORE: " + words);
const result2 = tail(words); // no need to capture the return value since we are not checking it
console.log("AFTER: " + result2)
assertEqual(words.length, 3); // original array should still have 3 elements!


console.log(tail([]));