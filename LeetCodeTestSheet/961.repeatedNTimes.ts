// You are given an integer array nums with the following properties:

// nums.length == 2 * n.
// nums contains n + 1 unique elements.
// Exactly one element of nums is repeated n times.
// Return the element that is repeated n times.

function repeatedNTimes(nums: number[]): number {
  // create variable n to equal the nums.length 2
  let n = nums.length / 2;
  // create count variable to track number times a element is seen count should equal 0
  let seen = {};

  // iterate through the array
  for (let i: number = 0; i < nums.length; i++) {
    // if element is seen add 1
    if (seen[nums[i]]) {
      seen[nums[i]]++;
    } else {
      seen[nums[i]] = 1;
    }
  }

  for (const key in seen) {
    if (seen[key] === n) {
      return +key;
    }
  }
}

// Example 1:
console.log(repeatedNTimes([1, 2, 3, 3]));
// Input: nums = [1,2,3,3]
// Output: 3

// Example 2:
console.log(repeatedNTimes([2, 1, 2, 5, 3, 2]));
// Input: nums = [2,1,2,5,3,2]
// Output: 2

// Example 3:
console.log(repeatedNTimes([5, 1, 5, 2, 5, 3, 5, 4]));
// Input: nums = [5,1,5,2,5,3,5,4]
// Output: 5
