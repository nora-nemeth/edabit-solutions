//https://edabit.com/challenge/XdAR3KohR5w7rjrFg

'use strict';

function sumOfCubes(nums) {
  let result = 0;
  for (index = 0; index < nums.length; index++) {
    result += Math.pow(nums[index], 3);
  }
  return result;
}
