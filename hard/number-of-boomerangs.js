//https://edabit.com/challenge/b7iHQDw72zzkmgCun

'use strict';

const isBoomerang = (num, index, arr) => num === arr[index + 2] && num !== arr[index + 1];
const countBoomerangs = arr => arr.filter(isBoomerang).length;