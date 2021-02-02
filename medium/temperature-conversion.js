//https://edabit.com/challenge/QW5CApff3WAGszrWY

'use strict';

const tempConversion = C => C + 273.15 < 0 ? 'Invalid' : [Number(((C * 9 / 5) + 32).toFixed(2)), Number((C + 273.15).toFixed(2))];
