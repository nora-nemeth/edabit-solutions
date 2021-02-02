//https://edabit.com/challenge/mgCKn998CNowjAZBF

'use strict';

function operation(a, b, op) {
  let aNum = Number(a);
  let bNum = Number(b);
  if (op === 'add') {
    return aNum + bNum === Infinity ? 'undefined' : aNum + bNum;
  }
  else if (op === 'subtract') {
    return aNum - bNum === Infinity ? 'undefined' : aNum - bNum;
  }
  else if (op === 'divide') {
    return aNum / bNum === Infinity ? 'undefined' : aNum / bNum;
  }
  else if (op === 'multiply') {
    return aNum * bNum === Infinity ? 'undefined' : aNum * bNum;
  }
}
