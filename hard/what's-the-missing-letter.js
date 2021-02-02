//https://edabit.com/challenge/t6HFLEYD2e7ePxAu5

'use strict';

function missingLetter(str) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const start = alphabet.indexOf(str[0]);
  const end = alphabet.indexOf(str[str.length - 1]) + 1;
  let alphabetSubStr = alphabet.substring(start, end);
  if (str === alphabetSubStr) {
    return 'No Missing Letter';
  } 
  else {
    for (index = 0; index < str.length; index++) {
      if (alphabetSubStr[index] !== str[index]) {
        return alphabetSubStr[index];
      }
    }
  }
}
