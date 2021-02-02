//https://edabit.com/challenge/Q3n42rEWanZSTmsJm

'use strict';

function minMax(arr) {
  let min = Infinity;
  let max = -Infinity;
  for (index = 0; index < arr.length; index++) {
    if (arr[index] < min) {
      min = arr[index];
    }
    else if (arr[index] > max) {
      max = arr[index];
    }
  }
  return [min, max];
}
