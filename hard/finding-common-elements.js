//https://edabit.com/challenge/jtAvQyyDpFA2EaCcj

'use strict';

function commonElements(arr1, arr2) {
  let reducedSortedArr = arr1.filter((x, i, self) => self.indexOf(x) === i);
  let result = [];
  for (const element of reducedSortedArr) {
    if (arr2.includes(element)) {
      result.push(element);
    }
  }
  return result;
}
