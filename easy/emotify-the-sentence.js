//https://edabit.com/challenge/Szh3ib2bpJCYXKrKa

'use strict';

function emotify(str) {
  let obj = {
    'Make me smile': ':D',
    'Make me grin': ':)',
    'Make me sad': ':(',
    'Make me mad': ':P',
  };
  return `Make me ${obj[str]}`;
}
