//https://edabit.com/challenge/P4zxwFNwZPGeiDwKy

'use strict';

function extendVowels(word, num) {
  if (num >= 0 && Number.isInteger(num)) {
    let result = '';
    for (index = 0; index < word.length; index++) {
      if (
        word[index] === 'a' ||
        word[index] === 'e' ||
        word[index] === 'i' ||
        word[index] === 'o' ||
        word[index] === 'u' ||
        word[index] === 'A' ||
        word[index] === 'E' ||
        word[index] === 'I' ||
        word[index] === 'O' ||
        word[index] === 'U'
      ) {
        result += word[index].repeat(num + 1);
      }
      else {
        result += word[index];
      }
    }
    return result;
  }
  else {
    return 'invalid';
  }
}
