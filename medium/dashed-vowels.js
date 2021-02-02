//https://edabit.com/challenge/QQxJqZnfFN6mPcBCr

'use strict';

function dashed(str) {
  let arr = str.split('');
  let result = [];
  for (index = 0; index < arr.length; index++) {
    if (
      arr[index] === 'a' ||
      arr[index] === 'e' ||
      arr[index] === 'i' ||
      arr[index] === 'o' ||
      arr[index] === 'u' ||
      arr[index] === 'A' ||
      arr[index] === 'E' ||
      arr[index] === 'I' ||
      arr[index] === 'O' ||
      arr[index] === 'U'
    ) 
    {
      result.push(arr[index].padStart(2, '-').padEnd(3, '-'));
    } 
    else 
    {
      result.push(arr[index]);
    }
  }
  return result.join('');
}
