// 1480. Running Sum of 1d Array
// Solved
// EASY -
// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums./

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var runningSum = function(nums) {
//     let sum = []

//     for(let i = 0; i < nums.length; i++){
//         if(i === 0){
//             sum[i] = nums[i]
//         }else{
//             sum[i] = sum[i - 1 ] + nums[i]
//         }
//     }

//     return sum
// };

var runningSum = function (nums) {
  // initalize a left variable to 0
  let left = 0;

  //initalize a right variable to the length of the array
  let right = nums.length - 1;

  //iterate thru the array
  while (left <= right) {
    // if left is not equal to 0
    if (left !== 0)
      //take the current number, add it to the previous number, and store the result back to the current position.
      nums[left] = nums[left - 1] + nums[left];

    // increment left variable
    left++;
  }

  //return original array modified
  return nums;
};

// Example 1:
// console.log(runningSum([1,2,3,4]))
// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

// Example 2:
// console.log(runningSum([1,1,1,1,1]))
// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].

// Example 3:
// console.log(runningSum([3,1,2,10,1]))
// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]
