// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {boolean}
//  */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let nearByDups = new Map();

  for (let i = 0; i < nums.length; i++) {
    console.log("Current index:", i);
    console.log("Current element:", nums[i]);

    if (i - nearByDups.get(nums[i]) <= k) return true;
    nearByDups.set(nums[i], i);
  }

  return false;
};
// Example 1:
console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
// Input: nums = [1,2,3,1], k = 3
// Output: true

// Example 2:
console.log(containsNearbyDuplicate([1, 0, 1, 1], 2)); // true</
// Input: nums = [1,0,1,1], k = 1
// Output: true

// Example 3:
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));
// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false
