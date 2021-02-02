//https://edabit.com/challenge/vsoQiYJXRANcYrX3Z

'use strict';

function ascDesNone(arr, str) {
  switch (str) {
    case 'Asc':
      return arr.sort((a, b) => a - b);
    case 'Des':
      return arr.sort((a, b) => b - a);
    default:
      return arr;
  }
}
