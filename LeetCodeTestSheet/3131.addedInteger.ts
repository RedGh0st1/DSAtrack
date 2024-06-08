// You are given two arrays of equal length, nums1 and nums2.
// Each element in nums1 has been increased (or decreased in the case of negative) by an integer, represented by the variable x.
// As a result, nums1 becomes equal to nums2. Two arrays are considered equal when they contain the same integers with the same frequencies.
// Return the integer x.

function addedInteger(nums1: number[], nums2: number[]): number {
  let sortedNums1: number[] = nums1.sort((a, b) => a - b);
  let sortedNums2: number[] = nums2.sort((a, b) => a - b);

  let x: number = Math.min(sortedNums2[0]) - Math.min(sortedNums1[0]);

  return x;
}

// Example 1:
console.log(addedInteger([2, 6, 4], [9, 7, 5]));
// Input: nums1 = [2,6,4], nums2 = [9,7,5]
// Output: 3
// Explanation:
// The integer added to each element of nums1 is 3.

// Example 2:
console.log(addedInteger([10], [5]));
// Input: nums1 = [10], nums2 = [5]
// Output: -5
// Explanation:
// The integer added to each element of nums1 is -5.

// Example 3:
console.log(addedInteger([1, 1, 1, 1], [1, 1, 1, 1, 1]));
// Input: nums1 = [1,1,1,1], nums2 = [1,1,1,1]
// Output: 0
// Explanation:
// The integer added to each element of nums1 is 0.
