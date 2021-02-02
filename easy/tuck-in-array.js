//https://edabit.com/challenge/7ysTEDruHz2prcJQ9

'use strict';

function tuckIn(arr1, arr2) {
  let firstSlice = arr1.slice(0, 1);
  let secondSlice = arr1.slice(1, 2);
  return firstSlice.concat(arr2, secondSlice);
}
