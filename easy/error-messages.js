//https://edabit.com/challenge/eGr8qEJjKwedk9SqY

'use strict';

function error(n) {
  if (n > 5 || n < 1) {
    return 101;
  }
  else {
    let obj = {
      1: 'Check the fan: e1',
      2: 'Emergency stop: e2',
      3: 'Pump Error: e3',
      4: 'c: e4',
      5: 'Temperature Sensor Error: e5',
    };
    return obj[n];
  }
}
