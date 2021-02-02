//https://edabit.com/challenge/RMcZpiKNzhri4pcCJ

'use strict';

function revSpecstring(mix) {
  const alphabet = 'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ';
  let letters = [];
  for (const element of mix.split('')) {
    if (alphabet.includes(element)) {
      letters.push(element);
    }
  }
  let reversedLetters = letters.reverse();
  for (index = 0; index < mix.length; index++) {
    if (alphabet.includes(mix[index]) === false) {
      reversedLetters.splice(index, 0, mix[index]);
    }
  }
  return reversedLetters.join('');
}
