// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number[]}
//  */

var intersection = function (nums1, nums2) {
  let intersectArr = new Set(nums1);
  let newArr = [];

  nums2.forEach((element) => {
    if (intersectArr.has(element) && !newArr.includes(element)) {
      newArr.push(element);
    }
  });

  return newArr;
};

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.
