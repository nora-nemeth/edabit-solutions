//https://edabit.com/challenge/EMuszDzF66k9J73HG

'use strict';

function jazzify(arr) {
  return (map = arr.map(checker));
}
function checker(element) {
  if (element.endsWith(7)) {
    return element;
  } 
  else {
    return element + 7;
  }
}
