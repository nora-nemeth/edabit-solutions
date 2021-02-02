//https://edabit.com/challenge/Mc6Xi4PRw7fDzeMDB

'use strict';

function doubleChar(str) {
  let result = '';
  for (index = 0; index < str.length; index++) {
    result += str[index].repeat(2);
  }
  return result;
}
