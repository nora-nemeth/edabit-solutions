//https://edabit.com/challenge/ebcd4Xu8TLizaj6dm

'use strict';

function arrayOfMultiples(num, length) {
  let result = [];
  for (index = 1; index <= length; index++) {
    result.push(num * index);
  }
  return result;
}
