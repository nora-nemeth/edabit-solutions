//https://edabit.com/challenge/3zAT89ZAxg4CAQqsZ

'use strict';

function secondLargest(arr) {
  let compareNumbers = (a, b) => a - b;
  let sorted = arr.sort(compareNumbers);
  return sorted[arr.length - 2];
}
