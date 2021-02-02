//https://edabit.com/challenge/rvsvGvqZ3BzNieKqA

'use strict';

function detectWord(str) {
  let compare = str.toLowerCase();
  let result = '';
  for (index = 0; index < str.length; index++) {
    if (str[index] === compare[index]) {
      result += str[index];
    }
  }
  return result;
}
