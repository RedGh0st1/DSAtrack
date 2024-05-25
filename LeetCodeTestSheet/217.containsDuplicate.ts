// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

var containsDuplicate = function (nums: number[]): boolean {
  // declare new Set to store unique numbers
  let unique = new Set<number>();

  // iterate nums array i dont need to do this loop
  for (let i: number = 0; i < nums.length; i++) {
    unique.add(nums[i]);
    // push elements into set
  }
  // end iterate
  return unique.size !== nums.length ? true : false;
  //compare new set variable length to nums array length
  //  return true if length is not equal or false if length is equal
};

// Example 1:
console.log(containsDuplicate([1, 2, 3, 1]));
// Input: nums = [1,2,3,1]
// Output: true

// Example 2:
console.log(containsDuplicate([1, 2, 3, 4]));
// Input: nums = [1,2,3,4]
// Output: false

// Example 3:
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true
