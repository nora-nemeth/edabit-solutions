//https://edabit.com/challenge/kbFhwaDyrd79JrgeB

'use strict';

function charCount(myChar, str) {
  let count = 0;
  for (index = 0; index < str.length; index++) {
    if (str[index] === myChar) {
      count++;
    }
  }
  return count;
}
