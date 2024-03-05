// Given an array of ints, return true if one of the first 4 elements in the array is a 9. The array length may be less than 4.

// Examples
// arrayFront9([1,2,9,3,4]) → true
// arrayFront9([1,2,3,4,9]) → false
// arrayFront9([1,2,3,4,5]) → false

function arrayFront9(nums: number[] = []): boolean {
  for (let i: number = 0; i < nums.length; i++) {
    if (nums[i] === 9 && nums[4] !== 9) return true;
  }

  return false;
}
