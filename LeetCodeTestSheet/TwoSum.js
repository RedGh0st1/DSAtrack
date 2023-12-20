// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Psuedocode

// declare function 2 arguments
//One for the array and one for that total count of the array to subtract from
// set a variable to hold the result
// Loop thru sums array
// check if nums[0] + nums[1] = target
// push nums[0], nums[1] into variable

// var twoSum = function (nums, target) {
//   let result = [];
//   for (let [i, num] of nums.entries()) {
//     for (let [j, num2] of nums.entries()) {
//       if (i !== j && (num + num2 === target)) {
//         result.push(i, j);
//       }
//     }
//   }
//   return result;
// }

var twoSum = function (nums, target) {
  let result = []
  // if (nums.length === 0) {
  //   return result
  // }

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i !== j && nums[i] + nums[j] === target && result.length === 0) {
        // if statement is checking to see make sure i is not the same as j,
        // checking if nums[0] and nums[1] equal to target
        // checking result length to make sure it is less then  7 for it to be true
        result.push(i, j)
      }
    }
  }
  return result
}
let nums = [2, 7, 11, 15],
  target = 9
console.log(twoSum(nums, target))
