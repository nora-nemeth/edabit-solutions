//https://edabit.com/challenge/wv6p5WR648oG6mTZx

'use strict';

function count(n) {
  let count = 0;
  let str = String(n);
  for (index = 0; index < str.length; index++) {
    if (Number.isInteger(Number(str[index]))) {
      count += 1;
    }
  }
  return count;
}
