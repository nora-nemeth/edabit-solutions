//https://edabit.com/challenge/48EJWLhF224na8po3

'use strict';

function generation(x, y) {
  let male = {
    '-3': 'great grandfather',
    '-2': 'grandfather',
    '-1': 'father',
    0: 'me!',
    1: 'son',
    2: 'grandson',
    3: 'great grandson',
  };
  let female = {
    '-3': 'great grandmother',
    '-2': 'grandmother',
    '-1': 'mother',
    0: 'me!',
    1: 'daughter',
    2: 'granddaughter',
    3: 'great granddaughter',
  };
  return y === 'm' ? male[x] : female[x];
}
