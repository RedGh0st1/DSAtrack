// Given an integer array nums containing distinct positive integers, find and return any number from the array that is neither the minimum nor the maximum value in the array, or -1 if there is no such number.

// Return the selected integer.

/**
 * @param {number[]} nums
 * @return {number}
 */

var findNonMinOrMax = function (nums) {
  let result;
  let min = Math.min(...nums);
  let max = Math.max(...nums);

  for (const n of nums) {
    if (n > min && n < max) {
      result = n;
    }
  }

  return result || -1;
};

// Example 1:
console.log(findNonMinOrMax([3, 2, 1, 4]) === 2);
// Explanation: In this example, the minimum value is 1 and the maximum value is 4. Therefore, either 2 or 3 can be valid answers.

// Example 2:
console.log(findNonMinOrMax([1, 2]) === -1);
// Explanation: Since there is no number in nums that is neither the maximum nor the minimum, we cannot select a number that satisfies the given condition. Therefore, there is no answer.

// Example 3:
console.log(findNonMinOrMax([2, 1, 3]) === 2);
// Explanation: Since 2 is neither the maximum nor the minimum value in nums, it is the only valid answer.

// another version 1
// var findNonMinOrMax = function(nums) {
//     return nums.length < 3 ? -1 : nums.sort((a, b) => a - b)[1]
// };

// another version 2
// var findNonMinOrMax = function (nums) {
//     if (nums.length < 3) return -1

//     let arr = nums.sort((a, b) => a - b)
//     for (var i = 1; i < arr.length - 1; i++) {
//         return arr[i]
//     }

// };
