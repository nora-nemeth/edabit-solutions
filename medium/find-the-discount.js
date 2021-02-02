//https://edabit.com/challenge/L4Hevck84exPwe4wo

'use strict';

function dis(price, discount) {
  let result = price - (price * discount) / 100;
  return Math.round((result + Number.EPSILON) * 100) / 100;
}
