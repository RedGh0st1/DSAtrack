// An array is considered special if every pair of its adjacent elements contains two numbers with different parity.

// You are given an array of integers nums. Return true if nums is a special array, otherwise, return false.

function isArraySpecial(nums: number[]): boolean {
  // iterate through the array
  for (let i: number = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0 && nums[i + 1] % 2 === 0) return false;
    if (nums[i] % 2 === 1 && nums[i + 1] % 2 === 1) return false;
  }

  return true;
}

// Example 1:
console.log(isArraySpecial([1]));
// Input: nums = [1]
// Output: true
// Explanation:
// There is only one element. So the answer is true.

// Example 2:
console.log(isArraySpecial([2, 1, 4]));
// Input: nums = [2,1,4]
// Output: true
// Explanation:
// There is only two pairs: (2,1) and (1,4), and both of them contain numbers with different parity. So the answer is true.

// Example 3:
console.log(isArraySpecial([4, 3, 1, 6]));
// Input: nums = [4,3,1,6]
// Output: false
// Explanation:
// nums[1] and nums[2] are both odd. So the answer is false.
