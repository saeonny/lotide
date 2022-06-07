# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @saeonny/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: returns the first item in the array. If the array is empty then retun undefined.
* `tail(array)`: returns the "tail" of an array: everything except for the first item (head) of the provided array.
* `without(array, remove)`: return a subset of a given array, removing unwanted elements.
* `countOnly(allItems, itemsToCount)`: will be given an array and an object. It will return an object containing counts of everything that the input object listed.
* `countLetters(string)`: return a count of each of the letters in given string.

