//https://edabit.com/challenge/eCPim4XcssdZdvs32

'use strict';

const isDigit = char => '0123456789'.includes(char);
const includesDigit = word => word.split('').some(isDigit);
const numInStr = words => words.filter(includesDigit);