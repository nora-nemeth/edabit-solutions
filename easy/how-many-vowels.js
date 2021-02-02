//https://edabit.com/challenge/3EQGHyiYTNc9LPmhF

'use strict';

const isVowel = char => 'aeiouAEIOU'.includes(char);
const countVowels = word => word.split('').filter(isVowel).length;