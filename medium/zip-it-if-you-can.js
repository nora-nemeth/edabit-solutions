//https://edabit.com/challenge/4QZqtGxiqJbzkNesj

'use strict';

function zipIt(women, men) {
  if (women.length !== men.length) {
    return "sizes don't match";
  }
  else {
    let result = [];
    for (let index = 0; index < men.length; index++) {
      result.push([women[index], men[index]]);
    }
    return result;
  }
}
