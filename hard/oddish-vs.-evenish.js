//https://edabit.com/challenge/r6TSNwkLZ2DgsoKiH

'use strict';

function oddishOrEvenish(num) {
  const sum = num.toString().split('').reduce((a, c) => +a + +c);
  return sum % 2 === 0 ? 'Evenish' : 'Oddish';
}
