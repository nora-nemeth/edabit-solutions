//https://edabit.com/challenge/7pkKPYtTJzpxRMckZ

'use strict';

function isPositiveDominant(arr) {
  let sortedArr = arr.sort((a, b) => a - b);
  let reducedSortedArr = [];
  for (i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] !== sortedArr[i + 1]) {
      reducedSortedArr.push(sortedArr[i]);
    }
  }
  let positiveCounter = 0;
  let negativeCounter = 0;
  for (const element of reducedSortedArr) {
    if (element > 0) {
      positiveCounter += 1;
    } 
    else if (element < 0) {
      negativeCounter += 1;
    }
  }
  return positiveCounter > negativeCounter;
}
