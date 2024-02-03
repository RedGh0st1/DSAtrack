// 1464. Maximum Product of Two Elements in an Array
// Easy

// Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).

//My algo   [3,4,5,2] should output [12] because 3 * 4= 12 , 3 * 5 =

// It should be j >= 0 to ensure that you iterate over all elements before i.

// The expression Math.max(nums[i] - 1) * Math.max(nums[j] - 1) should be wrapped in parentheses to correctly apply Math.max to the subtraction results.

var maxProduct = function (nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    console.log("This is nums[i] on line 633: ", nums[i]);

    for (let j = i - 1; j >= 0; j--) {
      console.log("This is nums[j] on line 636: ", nums[j]);

      result = Math.max(result, (nums[i] - 1) * (nums[j] - 1));
      console.log("This is result on line 639: ", result);
    }
  }

  console.log("This is final result on line 643: ", result);
  return result;
};

// Example 1:
console.log(maxProduct([3, 4, 5, 2]));
// Input: nums = [3,4,5,2]
// Output: 12
// Explanation: If you choose the indices i=1 and j=2 (indexed from 0), you will get the maximum value, that is, (nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 3*4 = 12.

// Example 2:
console.log(maxProduct([1, 5, 4, 5]));
// Input: nums = [1,5,4,5]
// Output: 16
// Explanation: Choosing the indices i=1 and j=3 (indexed from 0), you will get the maximum value of (5-1)*(5-1) = 16.

// Example 3:
console.log(maxProduct([3, 7]));
// Input: nums = [3,7]
// Output: 12

// Constraints:

// 2 <= nums.length <= 500
// 1 <= nums[i] <= 10^3
