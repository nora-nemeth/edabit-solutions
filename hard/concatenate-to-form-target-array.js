//https://edabit.com/challenge/f3Lc7Z5dK3p8dahoz

'use strict';

function canConcatenate(arr, target) {
  const ascending = (a, b) => a - b;
  let sortedFlattedArr = arr.flat().sort(ascending);
  let sortedTarget = target.sort(ascending);
  return String(sortedFlattedArr) === String(sortedTarget);
}
