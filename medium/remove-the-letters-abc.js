//https://edabit.com/challenge/RftQjZs3srJnRBEH8

'use strict';

function removeABC(str) {
  if (
    str.includes('a') === true ||
    str.includes('b') === true ||
    str.includes('c') === true
  ) 
  {
    let withoutA = str.replace(/a/g, '');
    let withoutB = withoutA.replace(/b/g, '');
    let withoutC = withoutB.replace(/c/g, '');
    return withoutC;
  } 
  else {
    return null;
  }
}
