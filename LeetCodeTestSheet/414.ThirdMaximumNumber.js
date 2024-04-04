// 414. Third Maximum Number
// Solved
// Easy
// Topics
// Companies
// Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.

var thirdMax = function (nums) {
  //created a new set variable array  and add all the elements of nums to it, then remove any duplicates
  const numbers = [...new Set(nums)];

  // sort the array in ascending order using JavaScript's built- sort() function
  const ascArr = numbers.sort((a, b) => a - b);

  // if the length of the array is less than or equal to 2, return the last element in the array
  return ascArr.length >= 3
    ? ascArr[ascArr.length - 3]
    : ascArr[ascArr.length - 1];
};

console.log(thirdMax([3, 2, 1]));
console.log(thirdMax([1, 2]));
